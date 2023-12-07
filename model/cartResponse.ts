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
import { CartProductItemResponse } from './cartProductItemResponse';
import { CartLeaseItemResponse } from './cartLeaseItemResponse';
import { CartStatusResponse } from './cartStatusResponse';


export interface CartResponse { 
    /**
     * Cart ID
     */
    cartId: string;
    /**
     * Org ID
     */
    orgId: string;
    /**
     * User ID
     */
    userId: string;
    /**
     * Account ID
     */
    accountId: string;
    status: CartStatusResponse;
    /**
     * Currency code
     */
    currency: string;
    /**
     * Stripe Client Secret.
     */
    clientSecret: string | null;
    notes: string;
    comments: string;
    shoppingCartLeaseItems: Array<CartLeaseItemResponse>;
    shoppingCartItems: Array<CartProductItemResponse>;
}

