interface Book
{
    // required data
    id: number; 
    title: string;
    description: string; 
    author: string; 
    // optional data 
    rate?: number; 
    dateStart?: Date; 
    dateRead?: Date; 
}