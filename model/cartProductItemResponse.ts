/**
 * ManageSpace Commerce API
 * ManageSpace Commerce API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CartProductItemResponse { 
    /**
     * Id
     */
    cartProductItemId: string;
    /**
     * Product Site ID
     */
    productSiteId: string;
    /**
     * Product ID
     */
    productId: string;
    /**
     * Site ID
     */
    siteId: string;
    /**
     * Quantity
     */
    quantity: number;
    /**
     * The price of the product in the smallest currency unit (e.g. cents for USD).
     */
    price: number;
    /**
     * The identifier for this product site record in the current payment provider.
     */
    paymentProviderId: string;
}

