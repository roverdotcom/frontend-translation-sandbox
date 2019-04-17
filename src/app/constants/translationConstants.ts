import { t, plural } from '@lingui/macro';
import i18n from '@rover/utilities/translation';

const test = i18n._('test');

export const appConstants = {
  reminder: (petList: string) =>  `Make sure all the information for ${petList} is up-to-date for your sitter`,
  bookingSummary: (petNum: string) => `Booking for ${petNum} pet`,
};
