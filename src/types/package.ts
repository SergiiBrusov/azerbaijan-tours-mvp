export type PackageType = "standard" | "middle" | "premium";

export type Package = {
  id: string;
  title: string;
  description: string;
  price: number;        // USD
  duration: string;     // "3 days"
  image: string;        // image path
  type: PackageType;    // package category
};
