import { Injectable } from '@angular/core';

declare var $: JQueryStatic;
interface JQueryStatic {
  notify: any;
  notifyDefaults: any;
}

@Injectable()
export class NotifyService {

constructor() { }
option = {
    element: 'body',
    position: 'absolute',
    allow_dismiss: false,
    newest_on_top: true,
    showProgressbar: false,
    type: 'info',
    placement: {
        from: 'top',
        align: 'center'
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    timer: 1500,
    mouse_over: null,
    animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
    }
};
success(message: any) {
    this.option.type = 'success';
    $.notifyDefaults(this.option);
    const notify = $.notify('...');
    notify.update('title', 'Success <br>');
    notify.update('icon', 'fa fa-check-circle');
    notify.update('message', message);
    return notify;
}
error(message: any) {
    this.option.type = 'danger';
    $.notifyDefaults(this.option);
    const notify = $.notify('...');
    notify.update('title', 'Error <br>');
    notify.update('icon', 'fa fa-remove');
    notify.update('message', message);
    return notify;
}

info(message: any) {
    this.option.type = 'info';
    $.notifyDefaults(this.option);
    const notify = $.notify('...');
    notify.update('title', 'Information <br>');
    notify.update('icon', 'fa fa-info-circle');
    notify.update('message', message);
    return notify;
}

warning(message: any) {
    this.option.type = 'warning';
    $.notifyDefaults(this.option);
    const notify = $.notify('...');
    notify.update('title', 'Warning <br>');
    notify.update('icon', 'fa fa-exclamation-triangle');
    notify.update('message', message);
    return notify;
}
}
