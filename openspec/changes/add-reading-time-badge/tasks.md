## 1. Create Reading Time Pipe

- [ ] 1.1 Create `src/app/shared/pipes/reading-time.pipe.ts` with ReadingTimePipe implementation
- [ ] 1.2 Implement word counting logic that strips HTML/markdown and splits on whitespace
- [ ] 1.3 Calculate reading time using 200 words per minute
- [ ] 1.4 Format output as "X min read" with minimum of 1 minute
- [ ] 1.5 Mark pipe as standalone and pure for performance

## 2. Update Article Preview Component

- [ ] 2.1 Import ReadingTimePipe in `src/app/features/article/components/article-preview.component.ts`
- [ ] 2.2 Update template in `src/app/features/article/components/article-preview.component.ts` to display reading time badge
- [ ] 2.3 Position reading time badge near the "Read more..." link or with tag list
- [ ] 2.4 Apply appropriate CSS classes for styling consistency

## 3. Update Article Detail Page

- [ ] 3.1 Import ReadingTimePipe in `src/app/features/article/pages/article/article.component.ts`
- [ ] 3.2 Update template in `src/app/features/article/pages/article/article.component.html` to display reading time badge
- [ ] 3.3 Position reading time badge in the banner section near the article title
- [ ] 3.4 Apply appropriate CSS classes for styling consistency

## 4. Testing and Verification

- [ ] 4.1 Test reading time calculation with various article lengths
- [ ] 4.2 Verify reading time displays correctly on article preview cards
- [ ] 4.3 Verify reading time displays correctly on article detail page
- [ ] 4.4 Confirm reading time is consistent between preview and detail views
- [ ] 4.5 Test edge cases (empty content, very short articles, very long articles)
