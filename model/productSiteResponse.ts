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


export interface ProductSiteResponse { 
    /**
     * Id of the product
     */
    productSiteId: string;
    /**
     * Price
     */
    price: number;
    /**
     * Stock/Quantity
     */
    stock: number;
    /**
     * Reorder level
     */
    reorderLevel: number;
    /**
     * Currency code
     */
    currency: string;
    /**
     * Product Category Id
     */
    productCategoryId: string;
    /**
     * Identifier of product.
     */
    productId: string;
    /**
     * Site Id
     */
    siteId: string;
    /**
     * Organization Id
     */
    orgId: string;
    /**
     * Payment provider ID
     */
    paymentProviderId: string;
}

