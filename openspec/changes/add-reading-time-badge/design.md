## Context

The Conduit application currently displays articles in preview cards (on global/personal feeds) and in a detailed article view. The Article model contains a `body` field with the full article content in markdown format. We need to add an estimated reading time badge to help users gauge article length before reading.

The existing codebase uses:

- Standalone Angular components with signals
- Inline templates for smaller components
- Shared pipes directory (`src/app/shared/pipes/`) for reusable transformations
- The Article model has a `body` field containing the full article text

## Goals / Non-Goals

**Goals:**

- Create a reusable Angular pipe that calculates reading time from text content
- Display reading time badge on article preview cards (both global and personal feeds)
- Display reading time badge on the article detail page
- Use a standard reading speed of 200 words per minute
- Ensure the implementation is performant and doesn't cause unnecessary re-calculations

**Non-Goals:**

- Modifying the Article model or API responses
- Adding user-configurable reading speed settings
- Accounting for images, code blocks, or other non-text content in reading time
- Storing calculated reading time on the backend

## Decisions

### 1. Pure Pipe for Reading Time Calculation

**Decision:** Create a pure Angular pipe called `ReadingTimePipe` that takes text content and returns a formatted string (e.g., "5 min read").

**Rationale:**

- Pipes are the Angular-idiomatic way to transform data in templates
- Pure pipes are cached by Angular, preventing unnecessary recalculations when the input doesn't change
- Follows the existing pattern (see `MarkdownPipe` and `DefaultImagePipe` in `src/app/shared/pipes/`)
- Keeps the calculation logic separate and testable

**Alternatives Considered:**

- Component method: Would recalculate on every change detection cycle, less performant
- Service with memoization: Over-engineered for this simple transformation

### 2. Word Count Calculation Method

**Decision:** Count words by splitting text on whitespace after stripping HTML/markdown.

**Rationale:**

- Simple and performant
- The article body is in markdown format, so we need to strip markdown syntax to get accurate word count
- 200 WPM is a standard reading speed for average readers

**Implementation:**

```typescript
// Strip markdown/HTML, split on whitespace, filter empty strings
const words = text
  .replace(/<[^>]*>/g, '')
  .split(/\s+/)
  .filter(w => w.length > 0);
const wordCount = words.length;
const minutes = Math.ceil(wordCount / 200);
```

**Alternatives Considered:**

- Using the marked library to parse markdown first: Adds async complexity and overhead
- Character-based estimation: Less accurate than word count

### 3. Display Format

**Decision:** Display as "X min read" where X is rounded up to the nearest minute. Minimum display is "1 min read".

**Rationale:**

- Clear and concise format commonly used across the web (Medium, Dev.to, etc.)
- Rounding up ensures users aren't surprised by longer-than-expected articles
- Minimum of 1 minute prevents "0 min read" for very short articles

### 4. Template Integration Points

**Decision:** Add the reading time badge in two locations:

1. **Article Preview Component**: Display near the "Read more..." link or with the tag list
2. **Article Detail Page**: Display in the banner section near the title

**Rationale:**

- Preview cards: Users need this info when deciding which article to read
- Detail page: Reinforces the time commitment before starting to read
- Both locations have access to the full article object with the body content

### 5. Styling Approach

**Decision:** Use existing Conduit CSS classes where possible, add minimal custom styling if needed.

**Rationale:**

- Maintains visual consistency with the existing design
- The tag-list styling (`.tag-default`, `.tag-pill`) could be reused or adapted
- Keeps the badge subtle and non-intrusive

## Risks / Trade-offs

**[Risk]** Reading time calculation on markdown content may be slightly inaccurate if articles contain lots of code blocks or special formatting.
→ **Mitigation:** This is acceptable for an estimate. The 200 WPM standard already accounts for some variance. We can refine the algorithm later if needed.

**[Risk]** Calculating reading time in the template (via pipe) means the calculation happens client-side for every article.
→ **Mitigation:** Pure pipes are cached by Angular, so recalculation only happens when the article body changes. For typical feed views with 10-20 articles, this is negligible overhead.

**[Trade-off]** Displaying reading time requires the full article body, which is already included in article preview responses.
→ **Impact:** No additional API calls needed, but the calculation is done on every article render. This is acceptable given the caching behavior of pure pipes.

**[Risk]** Very long articles (e.g., 60+ minutes) might look awkward with the "X min read" format.
→ **Mitigation:** Could add logic to display hours for articles over 60 minutes (e.g., "1 hr 15 min read"), but this can be added later if needed. Most articles are under 30 minutes.
