import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Product from '../models/Product';
import { UUID } from 'angular2-uuid';

@Injectable()
export default class ProductService {
    public API = 'http://localhost:8888/api';
    public PRODUCTS_API = `${this.API}/products`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(this.PRODUCTS_API);
    }

    get(id: string) {
        return this.http.get(`${this.PRODUCTS_API}/${id}`);
    }

    save(product: Product): Observable<Product> {
        let result: Observable<Product>;
        if (product.id) {
            product.id = UUID.UUID();
            result = this.http.put<Product>(
                `${this.PRODUCTS_API}/${product.id}`,
                product
            );
        } else {
            product.id = UUID.UUID();
            result = this.http.post<Product>(this.PRODUCTS_API, product);
        }
        return result;
    }

    remove(id: string) {
        return this.http.delete(`${this.PRODUCTS_API}/${id}`);
    }
}