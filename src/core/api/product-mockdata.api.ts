export interface ProductInfo {
  id: number;
  picUrl: string;
  title: string;
  description?: string;
  checked: boolean;
}

export interface ProductsDataMock {
  kittyes: ProductInfo[];
  puppyes: ProductInfo[];
}

export const productsMock: ProductsDataMock = {
  kittyes: [
    {
      id: 1,
      title: 'Kitty 1',
      picUrl:
        //  'https://i.pinimg.com/736x/ee/27/98/ee27987b07c907c9b156f2a1e6b37a08.jpg',
        'src/assets/images/kitty1.jpg',
      description: 'This is Kitty 1, please adopt me',
      checked: false,
    },
    {
      id: 2,
      title: 'Kitty 2',
      picUrl:
        //'https://wl-brightside.cf.tsp.li/resize/728x/jpg/4aa/b46/ea225d5b789710f8f7cc38c807.jpg',
        'src/assets/images/kitty2.jpg',
      description: 'This is Kitty 2, please adopt me',
      checked: false,
    },
    {
      id: 3,
      title: 'Kitty 3',
      picUrl:
        //'https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg',
        'src/assets/images/kitty3.jpg',
      description: 'This is Kitty 3, please adopt me',
      checked: false,
    },
    {
      id: 4,
      title: 'Kitty 4',
      picUrl:
        //'https://bedfordandbowery.com/wp-content/uploads/2019/05/5cc9abeeaf1d4_Screen-Shot-2019-05-01-at-10.19.23-AM.jpg',
        'src/assets/images/kitty4.jpg',
      description: 'This is Kitty 4, please adopt me',
      checked: false,
    },
    {
      id: 5,
      title: 'Kitty 5',
      picUrl:
        //'https://static8.depositphotos.com/1291798/797/i/450/depositphotos_7971908-stock-photo-curious-striped-scottish-fold-kitten.jpg',
        'src/assets/images/kitty5.jpg',
      description: 'This is Kitty 5, please adopt me',
      checked: false,
    },
  ],
  puppyes: [
    {
      id: 6,
      title: 'Puppy 1',
      picUrl:
        //'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B920%2C745%5D&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F05%2F04%2Fmaltese-puppy-getty-0520.jpg',
        'src/assets/images/puppy1.jpg',
      description: 'This is Puppy 1, please adopt me',
      checked: false,
    },
    {
      id: 7,
      title: 'Puppy 2',
      picUrl:
        //'https://www.thesprucepets.com/thmb/COdGzNriu8oQVi8igXmSzFzXTRk=/2109x2109/smart/filters:no_upscale()/puppy-samoyed-boy-990077480-5c89719646e0fb00012c67e8.jpg',
        'src/assets/images/puppy2.jpg',
      description: 'This is Puppy 2, please adopt me',
      checked: false,
    },
    {
      id: 8,
      title: 'Puppy 3',
      picUrl:
        //'https://www.thesprucepets.com/thmb/wHFNEHCOSfmM8A1AG0hIvgpT_PA=/2121x1414/filters:fill(auto,1)/golden-retriever-puppy-in-grass-923135452-5c887d4146e0fb00013365ba.jpg',
        'src/assets/images/puppy3.jpg',
      description: 'This is Puppy 3, please adopt me',
      checked: false,
    },
    {
      id: 9,
      title: 'Puppy 4',
      picUrl:
        //'https://i.dailymail.co.uk/1s/2020/06/29/22/30198268-8472445-image-a-4_1593464962804.jpg',
        'src/assets/images/puppy4.jpg',
      description: 'This is Puppy 4, please adopt me',
      checked: false,
    },
    {
      id: 10,
      title: 'Puppy 5',
      picUrl:
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2B0blZlalgiRehmHGiWkHChWvBAT1NjWwYA&usqp=CAU',
        'src/assets/images/puppy5.jpg',
      description: 'This is Puppy 5, please adopt me',
      checked: false,
    },
    {
      id: 11,
      title: 'Puppy 6',
      picUrl:
        //'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEWjD8cHntD9aPAAfMbbiE-Un1ADZB0KdkpA&usqp=CAU',
        'src/assets/images/puppy6.jpg',
      description: 'This is Kitty 6, please adopt me',
      checked: false,
    },
  ],
};
