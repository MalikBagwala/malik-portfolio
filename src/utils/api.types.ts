export interface WorkSummaryType {
  id: string;
  slug: string;
  shortDescription: string;
  title: string;
  thumbnail: { id: string; url: string };
}

export interface WorkDetailType extends WorkSummaryType {
  description: string;
}
