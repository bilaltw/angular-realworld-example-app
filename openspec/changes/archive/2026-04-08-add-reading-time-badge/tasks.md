## 1. Create Reading Time Pipe

- [x] 1.1 Create `src/app/shared/pipes/reading-time.pipe.ts` with ReadingTimePipe implementation
- [x] 1.2 Implement word counting logic that strips HTML/markdown and splits on whitespace
- [x] 1.3 Calculate reading time using 200 words per minute
- [x] 1.4 Format output as "X min read" with minimum of 1 minute
- [x] 1.5 Mark pipe as standalone and pure for performance

## 2. Update Article Preview Component

- [x] 2.1 Import ReadingTimePipe in `src/app/features/article/components/article-preview.component.ts`
- [x] 2.2 Update template in `src/app/features/article/components/article-preview.component.ts` to display reading time badge
- [x] 2.3 Position reading time badge near the "Read more..." link or with tag list
- [x] 2.4 Apply appropriate CSS classes for styling consistency

## 3. Update Article Detail Page

- [x] 3.1 Import ReadingTimePipe in `src/app/features/article/pages/article/article.component.ts`
- [x] 3.2 Update template in `src/app/features/article/pages/article/article.component.html` to display reading time badge
- [x] 3.3 Position reading time badge in the banner section near the article title
- [x] 3.4 Apply appropriate CSS classes for styling consistency

## 4. Testing and Verification

- [x] 4.1 Test reading time calculation with various article lengths
- [x] 4.2 Verify reading time displays correctly on article preview cards
- [x] 4.3 Verify reading time displays correctly on article detail page
- [x] 4.4 Confirm reading time is consistent between preview and detail views
- [x] 4.5 Test edge cases (empty content, very short articles, very long articles)
