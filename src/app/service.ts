import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class newService {
    productList = [
        {
            image: '/assets/img/joggers.png',
            title: 'Adicolor Classics Joggers',
            type: 'Dress',
            price: '63.85',
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/bag.png',
            title: 'Nike Sportswear Futura Luxe',
            type: 'Bag',
            price: '130.00',
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/scarf.png',
            title: 'Geometric print Scarf',
            type: 'scarf',
            price: '53.00',
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/yellow.png',
            title: 'Yellow Reserved Hoodie',
            type: 'Dress',
            price: '364.00',
            oldPrice: '155.00',
            isSale: true,
            isHot: false,
        },

        {
            image: '/assets/img/green.png',
            title: 'Basic Dress Green',
            type: 'Dress',
            price: '236.00',
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/shoe.png',
            title: 'Nike Air Zoom Pegasus',
            type: 'shoe',
            price: '220.00',
            oldPrice: '198.00',
            isSale: true,
            isHot: false,
        },

        {
            image: '/assets/img/nike.png',
            title: 'Nike Repel Miler',
            type: 'Dress',
            price: '120.50',
            isSale: false,
            isHot: false,
        },

        {
            image: '/assets/img/glasses.png',
            title: 'Nike Sportswear Futura Luxe',
            type: 'Glasses',
            price: '160.00',
            isSale: false,
            isHot: false,
        },
    ]

    count = JSON.parse(localStorage.getItem('count') || '0');
    selected: any[] = JSON.parse(localStorage.getItem('selected') || '[]');
    selectedProducts: any[] = Array.isArray(this.selected) ? [...this.selected] : [];
    
    increment() {
        this.count++;
        localStorage.setItem('count', this.count);
    }
    
    add(product: any) {
        this.selectedProducts.push(product);
        localStorage.setItem('selected', JSON.stringify(this.selectedProducts))
    }
}