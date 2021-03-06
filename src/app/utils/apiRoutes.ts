import { environment } from 'src/environments/environment';

const serverRoute = `${environment.baseURL}/api`;
const baseRoutes = {
  auth: `${serverRoute}/auth`,
  user: `${serverRoute}/user`,
  individual: `${serverRoute}/individual`,
  individualType: `${serverRoute}/individual/type`,
  contactType: `${serverRoute}/contact/type`,
  product: `${serverRoute}/product`,
  measurementType: `${serverRoute}/measurement-type`,
  productType: `${serverRoute}/product/type`,
  productBrand: `${serverRoute}/product/brand`,
  paymentMethod: `${serverRoute}/payment/method`,
  payment: `${serverRoute}/payment`,
  invoiceDetail: `${serverRoute}/invoice/detail`,
  invoice: `${serverRoute}/invoice`,
  order: `${serverRoute}/order`,
  orderDetail: `${serverRoute}/order/detail`,
};

export const ApiRoutes = {
  auth: {
    login: `${baseRoutes.auth}/login`,
    refreshToken: `${baseRoutes.auth}/refresh/token`,
    delete: `${baseRoutes.auth}/delete`,
    logout: `${baseRoutes.auth}/logout`,
  },
  individual: {
    search: `${baseRoutes.individual}/search`,
    get: `${baseRoutes.individual}/get`,
    create: `${baseRoutes.individual}/create`,
    update: `${baseRoutes.individual}/update`,
  },
  individualType: {
    getAll: `${baseRoutes.individualType}/getAll`,
    create: `${baseRoutes.individualType}/create`,
    update: `${baseRoutes.individualType}/update`,
    switchStatus: `${baseRoutes.individualType}/switch`,
    get: (id: number) => `${baseRoutes.individualType}/get/${id}`,
  },
  contactType: {
    search: `${baseRoutes.contactType}/search`,
    create: `${baseRoutes.contactType}/create`,
    update: `${baseRoutes.contactType}/update`,
    switchStatus: `${baseRoutes.contactType}/switchStatus`,
    get: (id: number) => `${baseRoutes.contactType}/get/${id}`,
  },
  product: {
    search: `${baseRoutes.product}/search`,
    update: `${baseRoutes.product}/update`,
    create: `${baseRoutes.product}/create`,
    get: `${baseRoutes.product}/get`,
    searchLessOrEqual: `${baseRoutes.product}/search-less-or-equal`,
  },
  measurementType: {
    search: `${baseRoutes.measurementType}/search`,
    get: (id: number) => `${baseRoutes.measurementType}/get/${id}`,
    create: `${baseRoutes.measurementType}/create`,
    update: `${baseRoutes.measurementType}/update`,
    switchStatus: `${baseRoutes.measurementType}/switchStatus`,
  },
  productType: {
    search: `${baseRoutes.productType}/search`,
    create: `${baseRoutes.productType}/create`,
    update: `${baseRoutes.productType}/update`,
    switchStatus: `${baseRoutes.productType}/switchStatus`,
    get: (id: number) => `${baseRoutes.productType}/get/${id}`,
  },
  productBrand: {
    search: `${baseRoutes.productBrand}/search`,
    get: (id: number) => `${baseRoutes.productBrand}/get/${id}`,
    create: `${baseRoutes.productBrand}/create`,
    update: `${baseRoutes.productBrand}/update`,
    switchStatus: `${baseRoutes.productBrand}/switchStatus`,
  },
  paymentMethod: {
    search: `${baseRoutes.paymentMethod}/search`,
    get: (id: number) => `${baseRoutes.paymentMethod}/get/${id}`,
    create: `${baseRoutes.paymentMethod}/create`,
    update: `${baseRoutes.paymentMethod}/update`,
  },
  invoiceDetail: {
    validate: `${baseRoutes.invoiceDetail}/validate`,
    create: `${baseRoutes.invoiceDetail}/create`,
    delete: (detailId: number, invoiceId: number) =>
      `${baseRoutes.invoiceDetail}/delete/${invoiceId}/${detailId}`,
    switchState: `${baseRoutes.invoiceDetail}/update/status`,
  },
  invoice: {
    search: `${baseRoutes.invoice}/search`,
    searchByClient: `${baseRoutes.invoice}/search/client`,
    get: (id: number) => `${baseRoutes.invoice}/get/${id}`,
    create: `${baseRoutes.invoice}/create`,
    update: `${baseRoutes.invoice}/update`,
    switchStatus: `${baseRoutes.invoice}/update/status`,
  },
  order: {
    search: `${baseRoutes.order}/search`,
    searchByClient: `${baseRoutes.order}/search/client`,
    get: (id: number) => `${baseRoutes.order}/get/${id}`,
    create: `${baseRoutes.order}/create`,
    update: `${baseRoutes.order}/update`,
    deliverAllProducts: `${baseRoutes.order}/deliver`,
    switchStatus: `${baseRoutes.order}/update/status`,
    searchAfterEstimatedDate: `${baseRoutes.order}/search/after-estimated-delivery-date`,
  },
  orderDetail: {
    validate: `${baseRoutes.orderDetail}/validate`,
    create: `${baseRoutes.orderDetail}/create`,
    delete: (orderId: number, detailId: number) =>
      `${baseRoutes.orderDetail}/delete/${orderId}/${detailId}`,
    switchState: `${baseRoutes.orderDetail}/update/status`,
  },
  user: {
    create: `${baseRoutes.user}/create`,
    updateCurrentUser: `${baseRoutes.user}/update`,
    updateUser: (id: number) => `${baseRoutes.user}/update/${id}`,
    getUserInformation: `${baseRoutes.user}/get`,
    getUser: (id: number) => `${baseRoutes.user}/get/${id}`,
    search: `${baseRoutes.user}/search`,
    switchStatus: `${baseRoutes.user}/switchStatus`,
    switchRole: `${baseRoutes.user}/switchRole`,
  },
  payment: {
    create: `${baseRoutes.payment}/create`,
    overturn: `${baseRoutes.payment}/overturn`,
    searchByDate: `${baseRoutes.payment}/search/by-date`,
  },
};
