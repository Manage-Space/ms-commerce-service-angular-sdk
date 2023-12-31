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


export interface FeeTypeResponse { 
    /**
     * Standard fee type UUID
     */
    standardFeeTypeId: string;
    /**
     * The name of the fee.
     */
    name: string;
    /**
     * Codename for the fee.
     */
    codeName: FeeTypeResponse.CodeNameEnum;
    /**
     * A description of the fee.
     */
    description: string;
}
export namespace FeeTypeResponse {
    export type CodeNameEnum = 'facility_fee' | 'late_fee' | 'convenience_fee';
    export const CodeNameEnum = {
        FacilityFee: 'facility_fee' as CodeNameEnum,
        LateFee: 'late_fee' as CodeNameEnum,
        ConvenienceFee: 'convenience_fee' as CodeNameEnum
    };
}


