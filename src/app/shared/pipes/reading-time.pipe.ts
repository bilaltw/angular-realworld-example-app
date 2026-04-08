import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readingTime',
  standalone: true,
})
export class ReadingTimePipe implements PipeTransform {
  transform(content: string | null | undefined): string {
    if (!content || content.trim().length === 0) {
      return '1 min read';
    }

    // Strip HTML/markdown tags and count words
    const plainText = content.replace(/<[^>]*>/g, '');
    const words = plainText.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // Calculate reading time at 200 words per minute, round up
    const minutes = Math.max(1, Math.ceil(wordCount / 200));

    return `${minutes} min read`;
  }
}
