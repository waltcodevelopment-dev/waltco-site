import type { MetadataRoute } from 'next';
import { isIndexable, robotsRules } from '@/lib/seo.ts';

export default function robots(): MetadataRoute.Robots {
  return robotsRules(isIndexable());
}
