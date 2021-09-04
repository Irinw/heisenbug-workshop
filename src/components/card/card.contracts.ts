export interface ICard {
    id: string;
    name: string;
    image: Image;
    temperament: string;
    adaptability: number;
}

export interface Image {
    url: string;
}