export type NewsletterFormType = {
  newsletterName: string;
  publisher: string;
  introduction: string;
  subscriptionFee: string;
  deliveryPeriod: string;
  field: string;
  keywords: string[];
  previousIssueLink: string | null;
  subscribeLink: string;
  mainImage: string;
};

export interface NewsletterResponseType extends NewsletterFormType {
  _id: string;
}
