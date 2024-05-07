import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class newService {
    productList = [
        {
            image: '/assets/img/joggers.png',
            title: 'Adicolor Classics Joggers',
            type: 'dress',
            price: 63.85,
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/bag.png',
            title: 'Nike Sportswear Futura Luxe',
            type: 'bag',
            price: 130.00,
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/scarf.png',
            title: 'Geometric print Scarf',
            type: 'scarf',
            price: 53.00,
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/yellow.png',
            title: 'Yellow Reserved Hoodie',
            type: 'dress',
            price: 364.00,
            oldPrice: 155.00,
            isSale: true,
            isHot: false,
        },

        {
            image: '/assets/img/green.png',
            title: 'Basic Dress Green',
            type: 'dress',
            price: 236.00,
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/shoe.png',
            title: 'Nike Air Zoom Pegasus',
            type: 'shoe',
            price: 220.00,
            oldPrice: 198.00,
            isSale: true,
            isHot: false,
        },

        {
            image: '/assets/img/nike.png',
            title: 'Nike Repel Miler',
            type: 'dress',
            price: 120.50,
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/glasses.png',
            title: 'Nike Sportswear Futura Luxe',
            type: 'gGlasses',
            price: 160.00,
            isSale: false,
            isHot: false,
        },
    ]


    count = JSON.parse(localStorage.getItem('count') || '0');
    selected: any[] = JSON.parse(localStorage.getItem('selected') || '[]');
    selectedProducts: any[] = Array.isArray(this.selected) ? [...this.selected] : [];
    totalPrice: number = this.selectedProducts.reduce((prev, current) => prev + Number(current.price), 0);

    increment() {
        this.count++;
        localStorage.setItem('count', this.count);
    }

    add(product: any) {
        this.selectedProducts.push(product);
        localStorage.setItem('selected', JSON.stringify(this.selectedProducts))
        this.totalPrice = this.selectedProducts.reduce((prev, current) => prev + Number(current.price), 0);
    }
}