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


export interface UpdateSubscriptionProductRequest { 
    /**
     * Subscription product Name
     */
    name?: string;
    /**
     * Subscription product Description
     */
    description?: string;
    /**
     * Product Category ID
     */
    subscriptionProductCategoryId?: string;
    /**
     * Image path for the subscription product
     */
    imagePath?: string;
    /**
     * Meta Data
     */
    metaData?: object;
}

