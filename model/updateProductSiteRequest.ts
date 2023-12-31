/**
 * ManageSpace Commerce API
 * ManageSpace Commerce API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdateProductSiteRequest { 
    /**
     * The price of the product in the smallest currency unit (e.g. cents for USD).
     */
    price?: number;
    /**
     * Quantity/stock
     */
    stock?: number;
    /**
     * Reorder level
     */
    reorderLevel?: number;
}

