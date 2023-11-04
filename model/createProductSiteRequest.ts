/**
 * ManageSpace Commerce API
 * ManageSpace Commerce API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateProductSiteRequest { 
    /**
     * The identifier of the product.
     */
    productId: string;
    /**
     * The price of the product in the smallest currency unit (e.g. cents for USD).
     */
    price: number;
    /**
     * Quantity/stock
     */
    stock?: number;
    /**
     * Reorder level
     */
    reorderLevel?: number;
    /**
     * Currency code
     */
    currency?: string;
}

