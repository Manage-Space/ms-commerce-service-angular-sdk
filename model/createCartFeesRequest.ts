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
import { CartFee } from './cartFee';


export interface CreateCartFeesRequest { 
    /**
     * A list of fees to be added to the cart.
     */
    cartFees: Array<CartFee>;
}

