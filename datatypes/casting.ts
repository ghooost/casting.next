export enum Sex {
  male='male',
  female='female',
  any='any',
}

export type Role = {
  name: string;
};

export type Applicant = {
  name: string;
  created: string;
  role: Role[];
  birthDate: string;
  phone: string;
  email: string;
  sex: Sex;
  high: number;
  weight: number;
  graduate: string;
  expirience: string;
};

export type Slot = {
  date: string;
  time: string;
  isActive: boolean;
  numOfApplicants: number;
  applicants?: Applicant[];
}

export type Casting = {
  id: string;
  name: string;
  note: string;
  isPublic: boolean;
  isOpen: boolean;
  owner?: string;
  authors?: string[];
  slots?: Slot[];
  roles?: Role[];
};

export type CastingPublic = Pick<
  Casting,
  "id" | "name" | "note" | "slots" | "roles"
>;
