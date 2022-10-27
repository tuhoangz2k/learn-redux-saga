type Gender = 'male' | 'female';
export interface Student {
    id?: string;
    name: string;
    age: number;
    mark: number;
    gender: Gender;
    city: string;
    createdAt?: number;
    updatedAt?: number;
}
