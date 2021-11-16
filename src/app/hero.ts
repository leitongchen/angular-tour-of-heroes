export interface Hero {
    id: number;
    name: string; 
};

export interface HeroResp {
    success: true; 
    results: Hero[]; 
}