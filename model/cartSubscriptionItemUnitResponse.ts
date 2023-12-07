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


export interface CartSubscriptionItemUnitResponse { 
    /**
     * Unit ID
     */
    unitId: string;
    /**
     * User-friendly display name for the unit; i.e unit name/label.
     */
    unitName: string;
    /**
     * Standard monthly price
     */
    standardPrice: number;
    /**
     * Pro-rated price
     */
    price: number;
    /**
     * Total days in the month (used for pro-rated price)
     */
    totalDaysInMonth: number;
    /**
     * Remaining days in the month (used for pro-rated price)
     */
    remainingDaysInMonth: number;
    /**
     * Status ID
     */
    statusId: number;
}

