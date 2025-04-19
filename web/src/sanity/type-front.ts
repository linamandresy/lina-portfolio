
export type PortableTextBlock = {
    _key: string;
    _type: 'block';
    style?: string;
    children: {
      _key: string;
      _type: 'span';
      text: string;
      marks?: string[];
    }[];
  };
  
