export type Tour = {
  id: string;            // уникальный идентификатор
  title: string;         // название тура
  description: string;   // краткое описание
  price: number;          // цена в USD
  duration: string;       // продолжительность, например "3 days"
  image: string;          // путь к картинке из /public
  whatsapp?: string;      // опционально: номер для связи
};
