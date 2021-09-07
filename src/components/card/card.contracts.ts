export interface CardProps extends CatInfo {

}
export interface CatInfo {
    id: string;
    name: string;
    image: Image;
    temperament: string;
    price: number;
}

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