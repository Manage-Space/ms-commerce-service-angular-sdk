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
import { CartItem } from './cartItem';


export interface CreateCartItemsRequest { 
    /**
     * A list of items to be added to the cart.
     */
    cartItems: Array<CartItem>;
}

