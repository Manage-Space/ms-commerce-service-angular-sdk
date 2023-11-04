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


export interface CreateSubscriptionProductSiteRequest { 
    /**
     * The identifier of the subscription product.
     */
    subscriptionProductId: string;
    /**
     * The price of the subscription product in the smallest currency unit (e.g. cents for USD).
     */
    price: number;
}

