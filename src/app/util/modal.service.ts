import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isShowLogoutModal: Boolean = false;
  isCancelLogout: Boolean = false;

  constructor() {}

  showLogoutModal() {
    this.isShowLogoutModal = true;
  }

  cancellogout() {
    this.isCancelLogout = true;
    this.isShowLogoutModal = false;
  }

  getIsShowLogoutModal(): Boolean {
    return this.isShowLogoutModal;
  }
}
