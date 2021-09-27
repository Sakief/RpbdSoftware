(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/NBv":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/reports/districtsummaryreport/districtreport/districtreport.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DistrictReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictReportComponent", function() { return DistrictReportComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_districtreportservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/districtreportservice */ "Nprh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class DistrictReportComponent {
    constructor(districtreportservice) {
        this.districtreportservice = districtreportservice;
        this.districtsalesColumnDefs = this.DistrictSalesReport();
    }
    ngOnInit() {
        this.districtreportservice.getDistrictReport().subscribe((districtreports) => {
            this.districtsalesrowData = districtreports;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    DistrictSalesReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                filter: true,
                rowGroup: true,
            },
            {
                headerName: 'Brand Name',
                field: 'brand_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'End Month Sales Volume/Share',
                children: [
                    {
                        headerName: 'End Month',
                        field: 'end_month',
                    },
                    {
                        headerName: 'Sales',
                        field: 'end_month_sale_volume',
                        sortable: true,
                        resizable: true,
                        aggFunc: 'sum',
                        valueParser: 'Number(newValue)',
                    },
                    {
                        headerName: 'Share',
                        field: 'end_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
            {
                headerName: 'Start Month Sales Volume',
                children: [
                    {
                        headerName: 'Start Month',
                        field: 'start_month',
                    },
                    {
                        headerName: 'Sales',
                        field: 'start_month_sale_volume',
                        sortable: true,
                        resizable: true,
                        aggFunc: 'sum',
                        valueParser: 'Number(newValue)',
                    },
                    {
                        headerName: 'Share',
                        field: 'start_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
        ];
    }
}
DistrictReportComponent.ɵfac = function DistrictReportComponent_Factory(t) { return new (t || DistrictReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_districtreportservice__WEBPACK_IMPORTED_MODULE_2__["DistrictReportService"])); };
DistrictReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DistrictReportComponent, selectors: [["app-districtreport"]], decls: 5, vars: 3, consts: [[1, "header"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "justify-content", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"]], template: function DistrictReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Monthswise District Sales Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function DistrictReportComponent_Template_ag_grid_angular_gridReady_4_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.districtsalesColumnDefs)("rowData", ctx.districtsalesrowData)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  padding: 10px;\n  flex: 50%;\n  height: 1000px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.district[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRpc3RyaWN0cmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJkaXN0cmljdHJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZmxleDogNTAlO1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXN0cmljdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "/OJs":
/*!*************************************************************!*\
  !*** ./src/app/main/profile-grid/profile-grid.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGridComponent", function() { return ProfileGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/profile.service */ "Aso2");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class ProfileGridComponent {
    // @Output() new createNewDivision = new EventEmitter();
    // inject the athleteService
    constructor(profileservice) {
        this.profileservice = profileservice;
        this.columnDefs = this.createColumnDefs();
    }
    // on init, subscribe to the athelete data
    ngOnInit() {
        this.profileservice.getProfile().subscribe((profiles) => {
            this.rowData = profiles;
        }, (error) => {
            console.log(error);
        });
        // newDivision(){
        //     this.createNewDivision.emit();
        // }
    }
    // before grid initialised
    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        // this.api.sizeColumnsToFit();
    }
    // create some simple column definitions
    createColumnDefs() {
        return [
            {
                headerName: 'Outlet ID',
                field: 'outlet_id',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Outlet Type ID',
                field: 'outlet_type_id',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Outlet Name',
                field: 'outlet_name',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Owner Name',
                field: 'owner_name',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Holding No',
                field: 'holding_no',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Road Name',
                field: 'road_name',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Block No',
                field: 'block_no',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Village',
                field: 'village',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Union',
                field: 'union',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Post Office',
                field: 'post_office',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Market Code',
                field: 'market_code',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Zone Code',
                field: 'zone_code',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Thana',
                field: 'thana_code',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'District',
                field: 'district_code',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Manager Name',
                field: 'manager_name',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Respondent Designation',
                field: 'respondent_designation',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Contact No 1',
                field: 'contact_no1',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Contact No 2',
                field: 'contact_no 2',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Contact No 3',
                field: 'contact_no 3',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Total Staff',
                field: 'total_staff',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Outlet Landmark',
                field: 'outlet_landmark',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'GPS Lattitude',
                field: 'gps_lat',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'GPS Longitude',
                field: 'gps_long',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Storage Capacity',
                field: 'storage_capacity',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Front Length',
                field: 'front_length',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Front Width',
                field: 'front_width',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Weekly Holiday',
                field: 'weekly_holiday',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'NID/Trade License No',
                field: 'outlet_name',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Survey By',
                field: 'survey_by',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Entry By',
                field: 'entry_by',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
            {
                headerName: 'Visit Date',
                field: 'visit_date',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
        ];
    }
}
ProfileGridComponent.ɵfac = function ProfileGridComponent_Factory(t) { return new (t || ProfileGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
ProfileGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileGridComponent, selectors: [["app-profile-grid"]], decls: 4, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "600px", 3, "columnDefs", "rowData", "gridReady"]], template: function ProfileGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function ProfileGridComponent_Template_ag_grid_angular_gridReady_3_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RpbdSoftware\rpbdsoft\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "2Q+2":
/*!*****************************************************************!*\
  !*** ./src/app/main/profile-create/profile-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCreateComponent", function() { return ProfileCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProfileCreateComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function ProfileCreateComponent_form_78_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ProfileCreateComponent_form_78_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const fg_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.profileSubmit(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create a Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fg_r2.invalid);
} }
class ProfileCreateComponent {
    constructor(fb, profileservice, router) {
        this.fb = fb;
        this.profileservice = profileservice;
        this.router = router;
        this.profileForms = this.fb.array([]);
    }
    ngOnInit() { }
    addProfileForm() {
        this.profileForms.push(this.fb.group({
            outlet_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_type_id: [''],
            outlet_name: [''],
            owner_name: [''],
            holding_no: [''],
            road_name: [''],
            block_no: [''],
            village: [''],
            union: [''],
            post_office: [''],
            market_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zone_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            thana_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            district_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_type: [''],
            manager_name: [],
            respondent_designation: [],
            contact_no1: [],
            contact_no2: [],
            contact_no3: [],
            total_staff: [],
            outlet_landmark: [],
            gps_lat: [],
            gps_long: [],
            storage_capacity: [],
            front_length: [],
            front_width: [],
            weekly_holiday: [],
            nid: [],
            survey_by: [],
            entry_by: [],
            visit_date: [],
        }));
    }
    profileSubmit(fg) {
        this.profileservice.createProfile(fg.value).subscribe((res) => {
            fg.patchValue({ outlet_id: res.outlet_id });
            this.showNotification('insert');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'insert':
                this.notification = { class: 'text-success', message: 'saved!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
ProfileCreateComponent.ɵfac = function ProfileCreateComponent_Factory(t) { return new (t || ProfileCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileCreateComponent, selectors: [["app-profile-create"]], decls: 79, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], [1, "btn", "btn-outline-success", 2, "width", "180px", 3, "click"], [1, "fa", "fa-plus"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "outlet_id", 1, "form-control", 2, "width", "130px"], ["formControlName", "outlet_type_id", 1, "form-control", 2, "width", "145px"], ["formControlName", "outlet_name", 1, "form-control", 2, "width", "380px"], ["formControlName", "owner_name", 1, "form-control", 2, "width", "300px"], ["formControlName", "holding_no", 1, "form-control", 2, "width", "70px"], ["formControlName", "road_name", 1, "form-control", 2, "width", "100px"], ["formControlName", "block_no", 1, "form-control", 2, "width", "50px"], ["formControlName", "village", 1, "form-control", 2, "width", "180px"], ["formControlName", "union", 1, "form-control", 2, "width", "180px"], ["formControlName", "post_office", 1, "form-control", 2, "width", "180px"], ["formControlName", "market_code", 1, "form-control", 2, "width", "120px"], ["formControlName", "zone_code", 1, "form-control", 2, "width", "120px"], ["formControlName", "thana_code", 1, "form-control", 2, "width", "110px"], ["formControlName", "district_code", 1, "form-control", 2, "width", "100px"], ["formControlName", "outlet_type", 1, "form-control", 2, "width", "230px"], ["formControlName", "manager_name", 1, "form-control", 2, "width", "300px"], ["formControlName", "respondent_designation", 1, "form-control", 2, "width", "200px"], ["formControlName", "contact_no1", 1, "form-control", 2, "width", "140px"], ["formControlName", "contact_no2", 1, "form-control", 2, "width", "140px"], ["formControlName", "contact_no3", 1, "form-control", 2, "width", "140px"], ["formControlName", "total_staff", 1, "form-control", 2, "width", "45px"], ["formControlName", "outlet_landmark", 1, "form-control", 2, "width", "400px"], ["formControlName", "gps_lat", 1, "form-control", 2, "width", "100px"], ["formControlName", "gps_long", 1, "form-control", 2, "width", "100px"], ["formControlName", "storage_capacity", 1, "form-control", 2, "width", "70px"], ["formControlName", "front_length", 1, "form-control", 2, "width", "60px"], ["formControlName", "front_width", 1, "form-control", 2, "width", "60px"], ["formControlName", "weekly_holiday", 1, "form-control", 2, "width", "40px"], ["formControlName", "nid", 1, "form-control", 2, "width", "140px"], ["formControlName", "survey_by", 1, "form-control", 2, "width", "300px"], ["formControlName", "entry_by", 1, "form-control", 2, "width", "300px"], ["formControlName", "visit_date", 1, "form-control", 2, "width", "150px"], ["type", "submit", 1, "btn", "btn-success", 2, "width", "130px", 3, "disabled"], [1, "far", "fa-save", "fa-lg"]], template: function ProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileCreateComponent_Template_button_click_7_listener() { return ctx.addProfileForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " New Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Outlet ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Outlet Type ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Outlet Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Owner Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Holding No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Road Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Block No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Village");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Union");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Post Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Market Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Zone Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Thana Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "District Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Outlet Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Manager Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Respondent Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Contact No1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Contact No2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Contact No3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Total Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Outlet Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "GPS Lattitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "GPS Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Storage Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Front Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Front Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Weekly Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Nid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Survey By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Entry By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Vist Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ProfileCreateComponent_span_76_Template, 3, 4, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ProfileCreateComponent_form_78_Template, 72, 2, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.profileForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBRUUsbUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTs7RUFFRSxxQkFBQTtBQUdGOztBQUFBO0VBRUUsdUNBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBTUE7RUFDRTtJQUNFLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtdGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi50aGVhZCB7XHJcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcclxufVxyXG4udGJvZHkge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAvLyB3aWR0aDogOTBweDtcclxuICAvLyBoZWlnaHQ6IDM5MHB4O1xyXG59XHJcbi50ciB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi50ZCB7XHJcbiAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4udGhlYWQgZGl2LnRyIGRpdi50ZDpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbmk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5lbGVtZW50VG9GYWRlSW5BbmRPdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWlub3V0IDJzIGxpbmVhciBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "38pd":
/*!*************************************************************!*\
  !*** ./src/app/main/brand-update/brand-update.component.ts ***!
  \*************************************************************/
/*! exports provided: BrandUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandUpdateComponent", function() { return BrandUpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/brand.service */ "S4pr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function BrandUpdateComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function BrandUpdateComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function BrandUpdateComponent_form_16_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.brandUpdate(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandUpdateComponent_form_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onDelete(fg_r2.get("brand_code").value, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
} }
class BrandUpdateComponent {
    constructor(fb, brandservice, router) {
        this.fb = fb;
        this.brandservice = brandservice;
        this.router = router;
        this.brandForms = this.fb.array([]);
    }
    ngOnInit() {
        this.brandservice.getBrand().subscribe((res) => {
            if (res == [])
                this.addBrandForm();
            else {
                res.forEach((brand) => {
                    this.brandForms.push(this.fb.group({
                        brand_code: [brand.brand_code],
                        brand_name: [brand.brand_name],
                        company_name: [brand.company_name],
                    }));
                });
            }
        });
    }
    addBrandForm() {
        this.brandForms.push(this.fb.group({
            brand_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            brand_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company_name: [''],
        }));
    }
    brandUpdate(fg) {
        this.brandservice.updateBrand(fg.value).subscribe((res) => {
            this.showNotification('update');
        });
    }
    onDelete(brand_code, i) {
        // if (brand_code == 0) this.brandForms.removeAt(i);
        //else if (confirm('Do you want to delete this outlet?'))
        this.brandservice.deleteBrand(brand_code).subscribe((res) => {
            confirm('Do you want to delete this brand?');
            this.brandForms.removeAt(i);
            this.showNotification('delete');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'update':
                this.notification = { class: 'text-primary', message: 'updated!' };
                break;
            case 'delete':
                this.notification = { class: 'text-danger', message: 'deleted!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
BrandUpdateComponent.ɵfac = function BrandUpdateComponent_Factory(t) { return new (t || BrandUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BrandUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BrandUpdateComponent, selectors: [["app-brand-update"]], decls: 17, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "brand_code", 1, "form-control", 2, "width", "130px"], ["formControlName", "brand_name", 1, "form-control", 2, "width", "380px"], ["formControlName", "company_name", 1, "form-control", 2, "width", "300px"], ["type", "submit", 1, "btn"], [1, "far", "fa-save", "fa-lg"], [1, "btn", "btn-light", "ml-1", 3, "click"]], template: function BrandUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Brand Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Brand Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BrandUpdateComponent_span_14_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BrandUpdateComponent_form_16_Template, 14, 1, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.brandForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxicmFuZC11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtBQUdGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUVFLG1CQUFBO0VBQ0EsNEJBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7O0VBRUUscUJBQUE7QUFHRjs7QUFBQTtFQUVFLHVDQUFBO0VBQ0EsVUFBQTtBQUdGOztBQU1BO0VBQ0U7SUFDRSxVQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJicmFuZC11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC10YWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLnRoZWFkIHtcclxuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xyXG59XHJcbi50Ym9keSB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gIC8vIHdpZHRoOiA5MHB4O1xyXG4gIC8vIGhlaWdodDogMzkwcHg7XHJcbn1cclxuLnRyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnRkIHtcclxuICAvLyBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi50aGVhZCBkaXYudHIgZGl2LnRkOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuaTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmVsZW1lbnRUb0ZhZGVJbkFuZE91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbm91dCAycyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5vdXQge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW5vdXQge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Aso2":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


// import 'rxjs/add/operator/do';
class ProfileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/profile-grid/';
        this.createUrl = 'http://127.0.0.1:8000/api/profile-create/';
        this.updateUrl = 'http://127.0.0.1:8000/api/profile-update/';
        this.deleteUrl = 'http://127.0.0.1:8000/api/profile-delete/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getProfile() {
        return this.httpClient.get(this.baseUrl);
    }
    createProfile(formData) {
        return this.httpClient.post(this.createUrl, formData);
    }
    updateProfile(formData) {
        return this.httpClient.put(this.updateUrl + formData.outlet_id, formData);
    }
    deleteProfile(id) {
        return this.httpClient.delete(this.updateUrl + id);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B0OP":
/*!**************************************************!*\
  !*** ./src/app/services/market-point.service.ts ***!
  \**************************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MarketService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/market-grid/';
        this.createUrl = 'http://127.0.0.1:8000/api/market-create/';
        this.updateUrl = 'http://127.0.0.1:8000/api/market-update/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getMarket() {
        return this.httpClient.get(this.baseUrl);
    }
    createMarket(formData) {
        return this.httpClient.post(this.createUrl, formData);
    }
    updateMarket(formData) {
        return this.httpClient.put(this.updateUrl + formData.market_code, formData);
    }
    deleteMarket(id) {
        return this.httpClient.delete(this.updateUrl + id);
    }
}
MarketService.ɵfac = function MarketService_Factory(t) { return new (t || MarketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MarketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarketService, factory: MarketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BT9S":
/*!*************************************************************!*\
  !*** ./src/app/main/profile-crud/profile-crud.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCrudComponent", function() { return ProfileCrudComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function ProfileCrudComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function ProfileCrudComponent_form_73_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ProfileCrudComponent_form_73_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.profileSubmit(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileCrudComponent_form_73_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onDelete(fg_r2.get("incremented_outlet_id").value, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fg_r2.invalid)("ngClass", fg_r2.get("incremented_outlet_id").value == 0 ? "btn-success" : "btn-outline-dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fg_r2.get("incremented_outlet_id").value == 0 ? "Create" : "Update", " ");
} }
class ProfileCrudComponent {
    constructor(fb, profileservice, router) {
        this.fb = fb;
        this.profileservice = profileservice;
        this.router = router;
        this.profileForms = this.fb.array([]);
    }
    ngOnInit() {
        this.profileservice.getProfile().subscribe((res) => {
            if (res == [])
                this.addProfileForm();
            else {
                res.forEach((profile) => {
                    this.profileForms.push(this.fb.group({
                        incremented_outlet_id: [profile.incremented_outlet_id],
                        outlet_id: [profile.outlet_id],
                        outlet_name: [profile.outlet_name],
                        owner_name: [profile.owner_name],
                        holding_no: [profile.holding_no],
                        road_name: [profile.road_name],
                        block_no: [profile.block_no],
                        village: [profile.village],
                        union: [profile.union],
                        post_office: [profile.post_office],
                        market_code: [profile.market_code],
                        zone_code: [profile.zone_code],
                        thana_code: [profile.thana_code],
                        district_code: [profile.district_code],
                        outlet_type: [profile.outlet_type],
                        manager_name: [profile.manager_name],
                        respondent_designation: [profile.respondent_designation],
                        contact_no1: [profile.contact_no1],
                        contact_no2: [profile.contact_no2],
                        contact_no3: [profile.contact_no3],
                        total_staff: [profile.total_staff],
                        outlet_landmark: [profile.outlet_landmark],
                        gps_lat: [profile.gps_lat],
                        gps_long: [profile.gps_long],
                        storage_capacity: [profile.storage_capacity],
                        front_length: [profile.front_length],
                        front_width: [profile.front_width],
                        weekly_holiday: [profile.weekly_holiday],
                        nid: [profile.nid],
                        survey_by: [profile.survey_by],
                        entry_by: [profile.entry_by],
                        visit_date: [profile.visit_date],
                    }));
                });
            }
        });
    }
    // redirect() {
    //   this.router.navigateByUrl('/main');
    // }
    addProfileForm() {
        this.profileForms.push(this.fb.group({
            incremented_outlet_id: [0],
            outlet_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_name: [''],
            owner_name: [''],
            holding_no: [''],
            road_name: [''],
            block_no: [''],
            village: [''],
            union: [''],
            post_office: [''],
            market_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zone_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            thana_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            district_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_type: [''],
            manager_name: [],
            respondent_designation: [],
            contact_no1: [],
            contact_no2: [],
            contact_no3: [],
            total_staff: [],
            outlet_landmark: [],
            gps_lat: [],
            gps_long: [],
            storage_capacity: [],
            front_length: [],
            front_width: [],
            weekly_holiday: [],
            nid: [],
            survey_by: [],
            entry_by: [],
            visit_date: [],
        }));
    }
    profileSubmit(fg) {
        if (fg.value.incremented_outlet_id == 0)
            this.profileservice.createProfile(fg.value).subscribe((res) => {
                fg.patchValue({ incremeneted_outlet_id: res.incremented_outlet_id });
                this.showNotification('insert');
            });
        else
            this.profileservice.updateProfile(fg.value).subscribe((res) => {
                this.showNotification('update');
            });
    }
    onDelete(incremented_outlet_id, i) {
        if (incremented_outlet_id == 0)
            this.profileForms.removeAt(i);
        else if (confirm('Do you want to delete this outlet?'))
            this.profileservice
                .deleteProfile(incremented_outlet_id)
                .subscribe((res) => {
                this.profileForms.removeAt(i);
                this.showNotification('delete');
            });
    }
    showNotification(category) {
        switch (category) {
            case 'insert':
                this.notification = { class: 'text-success', message: 'saved!' };
                break;
            case 'update':
                this.notification = { class: 'text-primary', message: 'updated!' };
                break;
            case 'delete':
                this.notification = { class: 'text-danger', message: 'deleted!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
ProfileCrudComponent.ɵfac = function ProfileCrudComponent_Factory(t) { return new (t || ProfileCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileCrudComponent, selectors: [["app-profile-crud"]], decls: 74, vars: 2, consts: [[1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], [1, "btn", "btn-outline-success", 2, "width", "180px", 3, "click"], [1, "fa", "fa-plus"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "outlet_id", 1, "form-control", 2, "width", "130px"], ["formControlName", "outlet_name", 1, "form-control", 2, "width", "380px"], ["formControlName", "owner_name", 1, "form-control", 2, "width", "300px"], ["formControlName", "holding_no", 1, "form-control", 2, "width", "70px"], ["formControlName", "road_name", 1, "form-control", 2, "width", "100px"], ["formControlName", "block_no", 1, "form-control", 2, "width", "50px"], ["formControlName", "village", 1, "form-control", 2, "width", "180px"], ["formControlName", "union", 1, "form-control", 2, "width", "180px"], ["formControlName", "post_office", 1, "form-control", 2, "width", "180px"], ["formControlName", "market_code", 1, "form-control", 2, "width", "120px"], ["formControlName", "zone_code", 1, "form-control", 2, "width", "120px"], ["formControlName", "thana_code", 1, "form-control", 2, "width", "110px"], ["formControlName", "district_code", 1, "form-control", 2, "width", "100px"], ["formControlName", "outlet_type", 1, "form-control", 2, "width", "230px"], ["formControlName", "manager_name", 1, "form-control", 2, "width", "300px"], ["formControlName", "respondent_designation", 1, "form-control", 2, "width", "200px"], ["formControlName", "contact_no1", 1, "form-control", 2, "width", "140px"], ["formControlName", "contact_no2", 1, "form-control", 2, "width", "140px"], ["formControlName", "contact_no3", 1, "form-control", 2, "width", "140px"], ["formControlName", "total_staff", 1, "form-control", 2, "width", "45px"], ["formControlName", "outlet_landmark", 1, "form-control", 2, "width", "400px"], ["formControlName", "gps_lat", 1, "form-control", 2, "width", "100px"], ["formControlName", "gps_long", 1, "form-control", 2, "width", "100px"], ["formControlName", "storage_capacity", 1, "form-control", 2, "width", "70px"], ["formControlName", "front_length", 1, "form-control", 2, "width", "60px"], ["formControlName", "front_width", 1, "form-control", 2, "width", "60px"], ["formControlName", "weekly_holiday", 1, "form-control", 2, "width", "40px"], ["formControlName", "nid", 1, "form-control", 2, "width", "140px"], ["formControlName", "survey_by", 1, "form-control", 2, "width", "300px"], ["formControlName", "entry_by", 1, "form-control", 2, "width", "300px"], ["formControlName", "visit_date", 1, "form-control", 2, "width", "150px"], ["type", "submit", 1, "btn", 2, "width", "130px", 3, "disabled", "ngClass"], [1, "far", "fa-save", "fa-lg"], [1, "btn", "btn-light", "ml-1", 3, "click"], [1, "far", "fa-trash-alt", "fa-lg", "text-danger"]], template: function ProfileCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Outlet ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Outlet Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Owner Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Holding No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Road Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Block No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Village");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Union");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Post Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Market Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Zone Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Thana Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "District Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Outlet Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Manager Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Respondent Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Contact No1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Contact No2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Contact No3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Total Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Outlet Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "GPS Lattitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "GPS Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Storage Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Front Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Front Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Weekly Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Nid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Survey By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Entry By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Vist Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileCrudComponent_Template_button_click_66_listener() { return ctx.addProfileForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " New Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ProfileCrudComponent_span_71_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, ProfileCrudComponent_form_73_Template, 69, 4, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.profileForms.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWNydWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtBQUdGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUVFLG1CQUFBO0VBQ0EsNEJBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7O0VBRUUscUJBQUE7QUFHRjs7QUFBQTtFQUVFLHVDQUFBO0VBQ0EsVUFBQTtBQUdGOztBQU1BO0VBQ0U7SUFDRSxVQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJwcm9maWxlLWNydWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC10YWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLnRoZWFkIHtcclxuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xyXG59XHJcbi50Ym9keSB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gIC8vIHdpZHRoOiA5MHB4O1xyXG4gIC8vIGhlaWdodDogMzkwcHg7XHJcbn1cclxuLnRyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnRkIHtcclxuICAvLyBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi50aGVhZCBkaXYudHIgZGl2LnRkOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuaTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmVsZW1lbnRUb0ZhZGVJbkFuZE91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbm91dCAycyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5vdXQge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW5vdXQge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "CIF1":
/*!*******************************************************!*\
  !*** ./src/app/main/zone-grid/zone-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: ZoneGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneGridComponent", function() { return ZoneGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/zone.service */ "z8zG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class ZoneGridComponent {
    constructor(zoneservice) {
        this.zoneservice = zoneservice;
        this.columnDefs = this.createColumnDefs();
    }
    ngOnInit() {
        this.zoneservice.getZone().subscribe((zones) => {
            this.rowData = zones;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        // this.api.sizeColumnsToFit();
    }
    createColumnDefs() {
        return [
            {
                headerName: 'Zone Code',
                field: 'zone_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Zone Name',
                field: 'zone_name',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
        ];
    }
}
ZoneGridComponent.ɵfac = function ZoneGridComponent_Factory(t) { return new (t || ZoneGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_1__["ZoneService"])); };
ZoneGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoneGridComponent, selectors: [["app-zone-grid"]], decls: 4, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "1000px", 3, "columnDefs", "rowData", "gridReady"]], template: function ZoneGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function ZoneGridComponent_Template_ag_grid_angular_gridReady_3_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx6b25lLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoiem9uZS1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "D16N":
/*!*****************************************************!*\
  !*** ./src/app/main/district/district.component.ts ***!
  \*****************************************************/
/*! exports provided: DistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictComponent", function() { return DistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/district.service */ "v/kp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _district_view_district_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./district-view/district-view.component */ "iTQP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_district_add_district_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-district/add-district.component */ "GZPH");







function DistrictComponent_app_add_district_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-district");
} }
class DistrictComponent {
    constructor(districtservice) {
        this.districtservice = districtservice;
        this.add_district = false;
        this.districts = [];
    }
    loadaddform() {
        this.add_district = true;
    }
    ngOnInit() {
        this.districtservice.getDistrict().subscribe((data) => {
            this.districts = data;
            console.log(data);
        }, (error) => console.log(error));
    }
}
DistrictComponent.ɵfac = function DistrictComponent_Factory(t) { return new (t || DistrictComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_district_service__WEBPACK_IMPORTED_MODULE_1__["DistrictService"])); };
DistrictComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DistrictComponent, selectors: [["app-district"]], inputs: { districts: "districts" }, decls: 7, vars: 1, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [3, "click"], [4, "ngIf"]], template: function DistrictComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-district-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DistrictComponent_Template_button_click_4_listener() { return ctx.loadaddform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add district");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DistrictComponent_app_add_district_6_Template, 1, 0, "app-add-district", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add_district);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _district_view_district_view_component__WEBPACK_IMPORTED_MODULE_4__["DistrictViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _add_district_add_district_component__WEBPACK_IMPORTED_MODULE_6__["AddDistrictComponent"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaXN0cmljdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJkaXN0cmljdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "DI67":
/*!***************************************************************!*\
  !*** ./src/app/main/market-create/market-create.component.ts ***!
  \***************************************************************/
/*! exports provided: MarketCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketCreateComponent", function() { return MarketCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_market_point_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/market-point.service */ "B0OP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MarketCreateComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function MarketCreateComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function MarketCreateComponent_form_18_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const fg_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.marketSubmit(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fg_r2.invalid);
} }
class MarketCreateComponent {
    constructor(fb, marketservice, router) {
        this.fb = fb;
        this.marketservice = marketservice;
        this.router = router;
        this.marketForms = this.fb.array([]);
    }
    ngOnInit() { }
    addMarketForm() {
        this.marketForms.push(this.fb.group({
            market_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            market_name: [''],
        }));
    }
    marketSubmit(fg) {
        this.marketservice.createMarket(fg.value).subscribe((res) => {
            fg.patchValue({ brand_code: res.brand_code });
            this.showNotification('insert');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'insert':
                this.notification = { class: 'text-success', message: 'saved!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
MarketCreateComponent.ɵfac = function MarketCreateComponent_Factory(t) { return new (t || MarketCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_market_point_service__WEBPACK_IMPORTED_MODULE_2__["MarketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MarketCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarketCreateComponent, selectors: [["app-market-create"]], decls: 19, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], [1, "btn", "btn-outline-success", 2, "width", "180px", 3, "click"], [1, "fa", "fa-plus"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "market_code", 1, "form-control", 2, "width", "140px"], ["formControlName", "market_name", 1, "form-control", 2, "width", "250px"], ["type", "submit", 1, "btn", "btn-success", 2, "width", "130px", 3, "disabled"], [1, "far", "fa-save", "fa-lg"]], template: function MarketCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Market Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Market Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketCreateComponent_Template_button_click_11_listener() { return ctx.addMarketForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " New Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MarketCreateComponent_span_16_Template, 3, 4, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MarketCreateComponent_form_18_Template, 9, 2, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marketForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXJrZXQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7QUFHRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFFRSxtQkFBQTtFQUNBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUFBOztFQUVFLHFCQUFBO0FBR0Y7O0FBQUE7RUFFRSx1Q0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFNQTtFQUNFO0lBQ0UsVUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibWFya2V0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLXRhYmxlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4udGhlYWQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XHJcbn1cclxuLnRib2R5IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgLy8gd2lkdGg6IDkwcHg7XHJcbiAgLy8gaGVpZ2h0OiAzOTBweDtcclxufVxyXG4udHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG4udGQge1xyXG4gIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLnRoZWFkIGRpdi50ciBkaXYudGQ6bGFzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5pOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4uZWxlbWVudFRvRmFkZUluQW5kT3V0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWlub3V0IDJzIGxpbmVhciBmb3J3YXJkcztcclxuICBhbmltYXRpb246IGZhZGVpbm91dCAycyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbm91dCB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbm91dCB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "GZPH":
/*!**********************************************************************!*\
  !*** ./src/app/main/district/add-district/add-district.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDistrictComponent", function() { return AddDistrictComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/district.service */ "v/kp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class AddDistrictComponent {
    constructor(districtservice, router) {
        this.districtservice = districtservice;
        this.router = router;
        this.districtform = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            district_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            district_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.addDistrict = () => {
            console.log(this.districtform.value);
            this.districtservice
                .createDistrict(this.districtform.value.district_code, this.districtform.value.district_name)
                .subscribe((result) => console.log(result), (error) => console.log(error));
        };
    }
    ngOnInit() { }
}
AddDistrictComponent.ɵfac = function AddDistrictComponent_Factory(t) { return new (t || AddDistrictComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_district_service__WEBPACK_IMPORTED_MODULE_2__["DistrictService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddDistrictComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddDistrictComponent, selectors: [["app-add-district"]], decls: 13, vars: 4, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "district_code"], ["type", "text", "formControlName", "district_name"], ["type", "submit"]], template: function AddDistrictComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddDistrictComponent_Template_form_ngSubmit_0_listener() { return ctx.addDistrict(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "District Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "District Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.districtform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 2, ctx.districtform.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZGlzdHJpY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Ga5V":
/*!***************************************************!*\
  !*** ./src/app/services/merchandising.service.ts ***!
  \***************************************************/
/*! exports provided: MerchandiseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandiseService", function() { return MerchandiseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MerchandiseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/merchandising-grid/';
        this.createUrl = 'http://127.0.0.1:8000/api/merchandising-create/';
        this.updateUrl = 'http://127.0.0.1:8000/api/merchandising-update/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getMerchandise() {
        return this.httpClient.get(this.baseUrl);
    }
    // createMerchandise(formData: any) {
    //   return this.httpClient.post(this.createUrl, formData);
    // }
    // // createMerchandise(outlet_id: string, visit_month: string) {
    // //   const body = JSON.stringify({ outlet_id, visit_month });
    // //   return this.httpClient.post(this.createUrl, body, this.httpheaders);
    // // }
    // updateMerchandise(formData: any) {
    //   return this.httpClient.put(this.updateUrl + formData.id, formData);
    // }
    // deleteMerchandise(id: any) {
    //   return this.httpClient.delete(this.updateUrl + id);
    // }
    // createMerchandise(outlet_id: string, visit_month: string, brands: string) {
    //   const body = JSON.stringify({ outlet_id, visit_month, brands });
    //   return this.httpClient.post(this.createUrl, body, this.httpheaders);
    // }
    createMerchandise(formData) {
        return this.httpClient.post(this.createUrl, formData);
    }
}
MerchandiseService.ɵfac = function MerchandiseService_Factory(t) { return new (t || MerchandiseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MerchandiseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MerchandiseService, factory: MerchandiseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I9t8":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/reports/overallmokamsummaryreport/overallmokamsummaryreport.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: OverallmokamsummaryreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallmokamsummaryreportComponent", function() { return OverallmokamsummaryreportComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_overallmokam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/overallmokam.service */ "fjDG");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class OverallmokamsummaryreportComponent {
    constructor(overallmokaservice) {
        this.overallmokaservice = overallmokaservice;
        this.overallMokamColumnDefs = this.OverallMokamDetailsReport();
        this.crownOverallMokamColumnDefs = this.OverallCrownMokamDetailsReport();
        this.leadingBrandOverallMokamColumnDefs = this.OverallLeadingMokamReport();
    }
    ngOnInit() {
        this.overallmokaservice.getMokamSummaryReport().subscribe((overallmokamreports) => {
            this.overallMokamRowData = overallmokamreports;
        }, (error) => {
            console.log(error);
        });
        this.overallmokaservice.getCrownMokamSummaryReport().subscribe((crownoverallmokamreports) => {
            this.crownOverallMokamRowData = crownoverallmokamreports;
        }, (error) => {
            console.log(error);
        });
        this.overallmokaservice.getLeadingBrandMokamSummaryReport().subscribe((leadingoverallmokamreports) => {
            this.leadningBrandOverallMokamRowData = leadingoverallmokamreports;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    OverallMokamDetailsReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                resizable: true,
                filter: true,
                rowGroup: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                resizable: true,
                sortable: true,
                rowGroup: true,
            },
            {
                headerName: 'Month',
                field: 'end_month',
                filter: true,
                resizable: true,
            },
            {
                headerName: 'Market Name',
                field: 'market_name',
                filter: true,
                resizable: true,
            },
            {
                headerName: 'Total Retail',
                field: 'total_retail',
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Market Size',
                field: 'Market_Size',
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
        ];
    }
    OverallCrownMokamDetailsReport() {
        return [
            {
                headerName: 'District',
                field: 'district_name',
                filter: true,
                rowGroup: true,
            },
            {
                headerName: 'Thana',
                field: 'thana_name',
                filter: true,
                resizable: true,
                rowGroup: true,
            },
            {
                headerName: 'Mokam',
                field: 'market_name',
                resizable: true,
            },
            {
                headerName: 'Month',
                field: 'end_month',
                resizable: true,
                filter: true,
            },
            {
                headerName: 'Retail',
                field: 'crown_retail',
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Sales',
                field: 'crown_sales',
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Share',
                field: 'Crown_Share',
                resizable: true,
                sortable: true,
            },
        ];
    }
    OverallLeadingMokamReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                rowGroup: true,
                resizable: true,
                filter: true,
            },
            {
                headerName: 'Thana',
                field: 'thana_name',
                filter: true,
                rowGroup: true,
                resizable: true,
            },
            {
                headerName: 'Market',
                field: 'market_name',
                resizable: true,
                filter: true,
            },
            {
                headerName: 'Month',
                field: 'end_month',
                resizable: true,
                filter: true,
            },
            {
                headerName: 'Brand',
                field: 'brand_name',
                resizable: true,
                filter: true,
            },
            {
                headerName: 'Retail',
                field: 'LeadingBrandRetail',
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Sales',
                field: 'LeadingBrandSales',
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Share',
                field: 'Leading_brand_share',
                resizable: true,
                sortable: true,
            },
        ];
    }
}
OverallmokamsummaryreportComponent.ɵfac = function OverallmokamsummaryreportComponent_Factory(t) { return new (t || OverallmokamsummaryreportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_overallmokam_service__WEBPACK_IMPORTED_MODULE_2__["OverallMokamService"])); };
OverallmokamsummaryreportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverallmokamsummaryreportComponent, selectors: [["app-overallmokamsummaryreport"]], decls: 13, vars: 9, consts: [[1, "header"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "600px", "align-items", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "800px", "align-items", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"]], template: function OverallmokamsummaryreportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Overall Mokam Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mokam Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function OverallmokamsummaryreportComponent_Template_ag_grid_angular_gridReady_6_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Crown Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function OverallmokamsummaryreportComponent_Template_ag_grid_angular_gridReady_9_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Leading Brand Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function OverallmokamsummaryreportComponent_Template_ag_grid_angular_gridReady_12_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.overallMokamColumnDefs)("rowData", ctx.overallMokamRowData)("groupIncludeTotalFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.crownOverallMokamColumnDefs)("rowData", ctx.crownOverallMokamRowData)("groupIncludeTotalFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.leadingBrandOverallMokamColumnDefs)("rowData", ctx.leadningBrandOverallMokamRowData)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: ["h2[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 150%;\n  opacity: 0.65;\n  text-align: center;\n  font-weight: 1000;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: maroon;\n}\n\n.district[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n\n.month[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3ZlcmFsbG1va2Ftc3VtbWFyeXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJvdmVyYWxsbW9rYW1zdW1tYXJ5cmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi5kaXN0cmljdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi5tb250aCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "JGH3":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/reports/districtsummaryreport/districtretails/districtretails/districtretails.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DistrictretailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictretailsComponent", function() { return DistrictretailsComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_districtretailsreports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/districtretailsreports.service */ "O8qy");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class DistrictretailsComponent {
    constructor(dsretailservice) {
        this.dsretailservice = dsretailservice;
        this.endretailscolumnDefs = this.DistrictEndRetailsReport();
        this.startretailscolumnDefs = this.DistrictStartRetailsReport();
    }
    ngOnInit() {
        this.dsretailservice.getDistrictEndRetailsReport().subscribe((districtendretailsreport) => {
            this.endretailsrowData = districtendretailsreport;
        }, (error) => {
            console.log(error);
        });
        this.dsretailservice.getDistrictStartRetailsReport().subscribe((districtstartretailreport) => {
            this.startretailsrowData = districtstartretailreport;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    DistrictEndRetailsReport() {
        return [
            {
                headerName: 'End Month Retail Counts',
                children: [
                    {
                        headerName: 'District Name',
                        field: 'district_name',
                        filter: true,
                        resizable: true,
                        sortable: true,
                        rowGroup: true,
                    },
                    {
                        headerName: 'Brand Name',
                        field: 'brand_name',
                        filter: true,
                        resizable: true,
                        sortable: true,
                    },
                    {
                        headerName: 'Month',
                        field: 'end_month',
                        resizable: true,
                    },
                    {
                        headerName: 'Retails',
                        field: 'end_retail_counts',
                        resizable: true,
                        sortable: true,
                        aggFunc: 'sum',
                        valueParser: 'valueParser(newValue)',
                    },
                ],
            },
        ];
    }
    DistrictStartRetailsReport() {
        return [
            {
                headerName: 'Start Month Retail Counts',
                children: [
                    {
                        headerName: 'District Name',
                        field: 'district_name',
                        filter: true,
                        resizable: true,
                        sortable: true,
                        rowGroup: true,
                    },
                    {
                        headerName: 'Brand Name',
                        field: 'brand_name',
                        filter: true,
                        resizable: true,
                        sortable: true,
                    },
                    {
                        headerName: 'Month',
                        field: 'start_month',
                        resizable: true,
                    },
                    {
                        headerName: 'Retails',
                        field: 'start_retail_counts',
                        resizable: true,
                        sortable: true,
                        aggFunc: 'sum',
                        valueParser: 'newValue(Number)',
                    },
                ],
            },
        ];
    }
}
DistrictretailsComponent.ɵfac = function DistrictretailsComponent_Factory(t) { return new (t || DistrictretailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_districtretailsreports_service__WEBPACK_IMPORTED_MODULE_2__["DistrictRetailsReportService"])); };
DistrictretailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DistrictretailsComponent, selectors: [["app-districtretails"]], decls: 9, vars: 6, consts: [[1, "header"], [1, "row"], [1, "column"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "justify-content", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"]], template: function DistrictretailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Month-wise District Retails Count Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function DistrictretailsComponent_Template_ag_grid_angular_gridReady_6_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function DistrictretailsComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.endretailscolumnDefs)("rowData", ctx.endretailsrowData)("groupIncludeTotalFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.startretailscolumnDefs)("rowData", ctx.startretailsrowData)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 50%;\n  padding: 20px;\n  height: 1400px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.district[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkaXN0cmljdHJldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6ImRpc3RyaWN0cmV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGZsZXg6IDUwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGhlaWdodDogMTQwMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXN0cmljdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "KWQH":
/*!**********************************************!*\
  !*** ./src/app/services/division.service.ts ***!
  \**********************************************/
/*! exports provided: DivisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionService", function() { return DivisionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


// import 'rxjs/add/operator/do';
class DivisionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/division-list/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getDivisions() {
        return this.httpClient.get(this.baseUrl);
    }
    createDivision(division_code, division_name) {
        const body = JSON.stringify({ division_code, division_name });
        return this.httpClient.post(this.baseUrl, body, this.httpheaders);
    }
}
DivisionService.ɵfac = function DivisionService_Factory(t) { return new (t || DivisionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DivisionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DivisionService, factory: DivisionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "authentication goes here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Ludi":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/district.service */ "v/kp");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");



class GridComponent {
    // inject the athleteService
    constructor(districtservice) {
        this.districtservice = districtservice;
        this.columnDefs = this.createColumnDefs();
    }
    // on init, subscribe to the athelete data
    ngOnInit() {
        this.districtservice.getDistrict().subscribe(districts => {
            this.rowData = districts;
        }, error => {
            console.log(error);
        });
    }
    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    }
    // create some simple column definitions
    createColumnDefs() {
        return [
            { headerName: "District Code",
                field: 'district_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true },
            { headerName: 'District Name',
                field: 'district_name',
                filter: true,
                resizable: true,
                sortable: true
            }
        ];
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_district_service__WEBPACK_IMPORTED_MODULE_1__["DistrictService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 1, vars: 4, consts: [[1, "ag-theme-alpine", 2, "width", "100%", "height", "800px", 3, "columnDefs", "rowData", "pagination", "paginationAutoPageSize", "gridReady"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ag-grid-angular", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function GridComponent_Template_ag_grid_angular_gridReady_0_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData)("pagination", true)("paginationAutoPageSize", true);
    } }, directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "N15J":
/*!***************************************************************!*\
  !*** ./src/app/main/market-update/market-update.component.ts ***!
  \***************************************************************/
/*! exports provided: MarketUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketUpdateComponent", function() { return MarketUpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_market_point_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/market-point.service */ "B0OP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MarketUpdateComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function MarketUpdateComponent_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function MarketUpdateComponent_form_14_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.marketUpdate(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MarketUpdateComponent_form_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onDelete(fg_r2.get("market_code").value, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
} }
class MarketUpdateComponent {
    constructor(fb, marketservice, router) {
        this.fb = fb;
        this.marketservice = marketservice;
        this.router = router;
        this.marketForms = this.fb.array([]);
    }
    ngOnInit() {
        this.marketservice.getMarket().subscribe((res) => {
            if (res == [])
                this.addMarketForm();
            else {
                res.forEach((market) => {
                    this.marketForms.push(this.fb.group({
                        market_code: [market.market_code],
                        market_name: [market.market_name],
                    }));
                });
            }
        });
    }
    addMarketForm() {
        this.marketForms.push(this.fb.group({
            market_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            market_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }));
    }
    marketUpdate(fg) {
        this.marketservice.updateMarket(fg.value).subscribe((res) => {
            this.showNotification('update');
        });
    }
    onDelete(market_code, i) {
        // if (brand_code == 0) this.brandForms.removeAt(i);
        //else if (confirm('Do you want to delete this outlet?'))
        this.marketservice.deleteMarket(market_code).subscribe((res) => {
            confirm('Do you want to delete this market?');
            this.marketForms.removeAt(i);
            this.showNotification('delete');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'update':
                this.notification = { class: 'text-primary', message: 'updated!' };
                break;
            case 'delete':
                this.notification = { class: 'text-danger', message: 'deleted!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
MarketUpdateComponent.ɵfac = function MarketUpdateComponent_Factory(t) { return new (t || MarketUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_market_point_service__WEBPACK_IMPORTED_MODULE_2__["MarketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MarketUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarketUpdateComponent, selectors: [["app-market-update"]], decls: 15, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "market_code", 1, "form-control", 2, "width", "130px"], ["formControlName", "market_name", 1, "form-control", 2, "width", "380px"], ["type", "submit", 1, "btn"], [1, "far", "fa-save", "fa-lg"], [1, "btn", "btn-light", "ml-1", 3, "click"], [1, "far", "fa-trash-alt", "fa-lg", "text-danger"]], template: function MarketUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Market Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Market Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MarketUpdateComponent_span_12_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MarketUpdateComponent_form_14_Template, 11, 1, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marketForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXJrZXQtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7QUFHRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFFRSxtQkFBQTtFQUNBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUFBOztFQUVFLHFCQUFBO0FBR0Y7O0FBQUE7RUFFRSx1Q0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFNQTtFQUNFO0lBQ0UsVUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibWFya2V0LXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLXRhYmxlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4udGhlYWQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XHJcbn1cclxuLnRib2R5IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgLy8gd2lkdGg6IDkwcHg7XHJcbiAgLy8gaGVpZ2h0OiAzOTBweDtcclxufVxyXG4udHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG4udGQge1xyXG4gIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLnRoZWFkIGRpdi50ciBkaXYudGQ6bGFzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5pOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4uZWxlbWVudFRvRmFkZUluQW5kT3V0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWlub3V0IDJzIGxpbmVhciBmb3J3YXJkcztcclxuICBhbmltYXRpb246IGZhZGVpbm91dCAycyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbm91dCB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbm91dCB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Nprh":
/*!***************************************************!*\
  !*** ./src/app/services/districtreportservice.ts ***!
  \***************************************************/
/*! exports provided: DistrictReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictReportService", function() { return DistrictReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DistrictReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.districtsalesUrl = 'http://127.0.0.1:8000/api/report/districtsalevolume';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getDistrictReport() {
        return this.httpClient.get(this.districtsalesUrl);
    }
}
DistrictReportService.ɵfac = function DistrictReportService_Factory(t) { return new (t || DistrictReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DistrictReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DistrictReportService, factory: DistrictReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "O8qy":
/*!************************************************************!*\
  !*** ./src/app/services/districtretailsreports.service.ts ***!
  \************************************************************/
/*! exports provided: DistrictRetailsReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictRetailsReportService", function() { return DistrictRetailsReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DistrictRetailsReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.districtendtretailsUrl = 'http://127.0.0.1:8000/api/report/districtendretails';
        this.districtstartretailsUrl = 'http://127.0.0.1:8000/api/report/districtstartretails';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getDistrictEndRetailsReport() {
        return this.httpClient.get(this.districtendtretailsUrl);
    }
    getDistrictStartRetailsReport() {
        return this.httpClient.get(this.districtstartretailsUrl);
    }
}
DistrictRetailsReportService.ɵfac = function DistrictRetailsReportService_Factory(t) { return new (t || DistrictRetailsReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DistrictRetailsReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DistrictRetailsReportService, factory: DistrictRetailsReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OmIG":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/reports/thanasummaryreport/thanasalesreport/thanasales/thanasales.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ThanasalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanasalesComponent", function() { return ThanasalesComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_thanasalesreport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/thanasalesreport.service */ "myKr");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class ThanasalesComponent {
    constructor(thanasalesreportservice) {
        this.thanasalesreportservice = thanasalesreportservice;
        this.thanasalesColumnDefs = this.ThanaSalesReport();
    }
    ngOnInit() {
        this.thanasalesreportservice.getThanaSalesReport().subscribe((thanasalesreports) => {
            this.thanasalesrowData = thanasalesreports;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    ThanaSalesReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                rowGroup: true,
                hide: true,
                filter: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                filter: true,
                rowGroup: true,
                groupHeader: 'Thana',
                hide: true,
            },
            {
                headerName: 'Brand Name',
                field: 'brand_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'End Month Sales Volume/Share',
                children: [
                    {
                        headerName: 'MonthName',
                        field: 'end_month',
                    },
                    {
                        headerName: 'Sales',
                        field: 'volume_end',
                        sortable: true,
                        resizable: true,
                        aggFunc: 'sum',
                        valueParser: 'Number(newValue)',
                    },
                    {
                        headerName: 'Share',
                        field: 'end_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
            {
                headerName: 'Start Month Sales/Share',
                children: [
                    {
                        headerName: 'Month',
                        field: 'start_month',
                    },
                    {
                        headerName: 'Sales',
                        field: 'volume_start',
                        sortable: true,
                        resizable: true,
                        aggFunc: 'sum',
                        valueParser: 'Number(newValue)',
                    },
                    {
                        headerName: 'Share',
                        field: 'start_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
        ];
    }
}
ThanasalesComponent.ɵfac = function ThanasalesComponent_Factory(t) { return new (t || ThanasalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_thanasalesreport_service__WEBPACK_IMPORTED_MODULE_2__["ThanaSalesReportService"])); };
ThanasalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThanasalesComponent, selectors: [["app-thanasales"]], decls: 5, vars: 3, consts: [[1, "header"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "justify-content", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"]], template: function ThanasalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "District & Month-wise Thana Sales Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function ThanasalesComponent_Template_ag_grid_angular_gridReady_4_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.thanasalesColumnDefs)("rowData", ctx.thanasalesrowData)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: maroon;\n}\n\n.district[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGFuYXNhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InRoYW5hc2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLmRpc3RyaWN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "QZXc":
/*!***********************************************!*\
  !*** ./src/app/main/thana/thana.component.ts ***!
  \***********************************************/
/*! exports provided: ThanaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaComponent", function() { return ThanaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_thana_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/thana.service */ "zED6");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thana_view_thana_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thana-view/thana-view.component */ "jd4U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_thana_add_thana_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-thana/add-thana.component */ "z2Ri");







function ThanaComponent_app_add_thana_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-thana");
} }
// import { AddDivisionComponent } from './add-division/add-division.component';
class ThanaComponent {
    constructor(thanaservice) {
        this.thanaservice = thanaservice;
        this.add_thana = false;
        this.thanas = [];
    }
    loadaddform() {
        this.add_thana = true;
    }
    ngOnInit() {
        this.thanaservice.getThana().subscribe((data) => {
            this.thanas = data;
            console.log(data);
        }, (error) => console.log(error));
    }
}
ThanaComponent.ɵfac = function ThanaComponent_Factory(t) { return new (t || ThanaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_thana_service__WEBPACK_IMPORTED_MODULE_1__["ThanaService"])); };
ThanaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThanaComponent, selectors: [["app-thana"]], inputs: { thanas: "thanas" }, decls: 7, vars: 1, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [3, "click"], [4, "ngIf"]], template: function ThanaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-thana-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThanaComponent_Template_button_click_4_listener() { return ctx.loadaddform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add thana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ThanaComponent_app_add_thana_6_Template, 1, 0, "app-add-thana", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add_thana);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _thana_view_thana_view_component__WEBPACK_IMPORTED_MODULE_4__["ThanaViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _add_thana_add_thana_component__WEBPACK_IMPORTED_MODULE_6__["AddThanaComponent"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aGFuYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJ0aGFuYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "QdEa":
/*!*************************************************************!*\
  !*** ./src/app/main/brand-create/brand-create.component.ts ***!
  \*************************************************************/
/*! exports provided: BrandCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandCreateComponent", function() { return BrandCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/brand.service */ "S4pr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BrandCreateComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function BrandCreateComponent_form_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function BrandCreateComponent_form_17_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const fg_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.brandSubmit(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fg_r2.invalid);
} }
class BrandCreateComponent {
    constructor(fb, brandservice, router) {
        this.fb = fb;
        this.brandservice = brandservice;
        this.router = router;
        this.brandForms = this.fb.array([]);
    }
    ngOnInit() { }
    addBrandForm() {
        this.brandForms.push(this.fb.group({
            brand_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            brand_name: [''],
            company_name: [],
        }));
    }
    brandSubmit(fg) {
        this.brandservice.createBrand(fg.value).subscribe((res) => {
            fg.patchValue({ brand_code: res.brand_code });
            this.showNotification('insert');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'insert':
                this.notification = { class: 'text-success', message: 'saved!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
BrandCreateComponent.ɵfac = function BrandCreateComponent_Factory(t) { return new (t || BrandCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_2__["BrandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BrandCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BrandCreateComponent, selectors: [["app-brand-create"]], decls: 18, vars: 2, consts: [[1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], [1, "btn", "btn-outline-success", 2, "width", "180px", 3, "click"], [1, "fa", "fa-plus"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "brand_code", 1, "form-control", 2, "width", "70px"], ["formControlName", "brand_name", 1, "form-control", 2, "width", "250px"], ["formControlName", "company_name", 1, "form-control", 2, "width", "380px"], ["type", "submit", 1, "btn", "btn-success", 2, "width", "130px", 3, "disabled"], [1, "far", "fa-save", "fa-lg"]], template: function BrandCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Brand Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Brand Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandCreateComponent_Template_button_click_10_listener() { return ctx.addBrandForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " New Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BrandCreateComponent_span_15_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BrandCreateComponent_form_17_Template, 11, 2, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.brandForms.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxicmFuZC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtBQUdGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUVFLG1CQUFBO0VBQ0EsNEJBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7O0VBRUUscUJBQUE7QUFHRjs7QUFBQTtFQUVFLHVDQUFBO0VBQ0EsVUFBQTtBQUdGOztBQU1BO0VBQ0U7SUFDRSxVQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJicmFuZC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC10YWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLnRoZWFkIHtcclxuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xyXG59XHJcbi50Ym9keSB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gIC8vIHdpZHRoOiA5MHB4O1xyXG4gIC8vIGhlaWdodDogMzkwcHg7XHJcbn1cclxuLnRyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnRkIHtcclxuICAvLyBvdmVyZmxvdzogYXV0bztcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi50aGVhZCBkaXYudHIgZGl2LnRkOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuaTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLmVsZW1lbnRUb0ZhZGVJbkFuZE91dCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbm91dCAycyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW5vdXQge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW5vdXQge1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "S4pr":
/*!*******************************************!*\
  !*** ./src/app/services/brand.service.ts ***!
  \*******************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class BrandService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.gridUrl = 'http://127.0.0.1:8000/api/brand-grid/';
        this.createUrl = 'http://127.0.0.1:8000/api/brand-create/';
        this.updateUrl = 'http://127.0.0.1:8000/api/brand-update/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getBrand() {
        return this.httpClient.get(this.gridUrl);
    }
    createBrand(formData) {
        return this.httpClient.post(this.createUrl, formData);
    }
    updateBrand(formData) {
        return this.httpClient.put(this.updateUrl + formData.brand_code, formData);
    }
    deleteBrand(brand_code) {
        return this.httpClient.delete(this.updateUrl + brand_code);
    }
}
BrandService.ɵfac = function BrandService_Factory(t) { return new (t || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BrandService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrandService, factory: BrandService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "V0Tn":
/*!*************************************************************!*\
  !*** ./src/app/main/merch-create/merch-create.component.ts ***!
  \*************************************************************/
/*! exports provided: MerchCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchCreateComponent", function() { return MerchCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_merchandising_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/merchandising.service */ "Ga5V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MerchCreateComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Brand Code : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Merchandising Tools: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Quantity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchCreateComponent_tr_17_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.removeBrand(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2);
} }
class MerchCreateComponent {
    constructor(fb, merchservice, router) {
        this.fb = fb;
        this.merchservice = merchservice;
        this.router = router;
        this.submitted = false;
        this.merchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            outlet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            visit_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            brands: this.fb.array([]),
        });
    }
    ngOnInit() {
        // this.merchForm = this.fb.group({
        //   outlet_id: '',
        //   visit_month: '',
        //   brands: this.fb.array([]),
        // });
    }
    brands() {
        return this.merchForm.get('brands');
    }
    newBrands() {
        return this.fb.group({
            brand_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            merchandising_tools: '',
            quantity: '',
        });
    }
    addBrand() {
        this.brands().push(this.newBrands());
    }
    removeBrand(i) {
        this.brands().removeAt(i);
    }
    // addMerch = () => {
    //   console.log(this.merchForm.value);
    //   this.merchservice
    //     .createMerchandise(
    //       this.merchForm.value.outlet_id,
    //       this.merchForm.value.visit_month,
    //       this.merchForm.value.brands
    //     )
    //     .subscribe(
    //       (result) => console.log(result),
    //       (error) => console.log(error)
    //     );
    // };
    addMerch(data) {
        this.merchservice.createMerchandise(data);
    }
    onSubmit() {
        console.log(this.merchForm.value);
    }
}
MerchCreateComponent.ɵfac = function MerchCreateComponent_Factory(t) { return new (t || MerchCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_merchandising_service__WEBPACK_IMPORTED_MODULE_2__["MerchandiseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MerchCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MerchCreateComponent, selectors: [["app-merch-create"]], decls: 22, vars: 5, consts: [[1, "container"], [3, "formGroup", "ngsubmit"], ["for", "outletid"], ["type", "text", "formControlName", "outlet_id", 1, "form-control"], ["for", "visitmonth"], ["type", "text", "formControlName", "visit_month", 1, "form-control"], ["formArrayName", "brands", 1, "table", "table-bordered"], ["colspan", "2"], ["width", "150px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success"], [3, "formGroupName"], ["type", "text", "formControlName", "brand_code", 1, "form-control"], ["type", "text", "formControlName", "merchandising_tools", 1, "form-control"], ["type", "text", "formControlName", "quantity", 1, "form-control"], [1, "btn", "btn-danger", 3, "click"]], template: function MerchCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngsubmit", function MerchCreateComponent_Template_form_ngsubmit_1_listener() { return ctx.addMerch(ctx.merchForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Outlet ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Visit Month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add Merchandising For Multiple Brands:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchCreateComponent_Template_button_click_15_listener() { return ctx.addBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Add Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MerchCreateComponent_tr_17_Template, 13, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.merchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.brands().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 3, ctx.merchForm.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXJjaC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Vc6x":
/*!*******************************************************!*\
  !*** ./src/app/services/outletsalesreport.service.ts ***!
  \*******************************************************/
/*! exports provided: OutletSalesReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletSalesReportService", function() { return OutletSalesReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class OutletSalesReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.outletsalesUrl = 'http://127.0.0.1:8000/api/report/outletsalesvolume';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getOutletSalesReport() {
        return this.httpClient.get(this.outletsalesUrl);
    }
}
OutletSalesReportService.ɵfac = function OutletSalesReportService_Factory(t) { return new (t || OutletSalesReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OutletSalesReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OutletSalesReportService, factory: OutletSalesReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WHj0":
/*!**********************************************************************************!*\
  !*** ./src/app/main/reports/thanaretails/thanaretails/thanaretails.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ThanaretailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaretailsComponent", function() { return ThanaretailsComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_thanaretailsreports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/thanaretailsreports.service */ "q4B1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class ThanaretailsComponent {
    constructor(thretailservice) {
        this.thretailservice = thretailservice;
        this.endretailscolumnDefs = this.ThanaEndRetailsReport();
        this.startretailscolumnDefs = this.ThanaStartRetailsReport();
    }
    ngOnInit() {
        this.thretailservice.getThanaEndRetailsReport().subscribe((thanaendretailsreport) => {
            this.endretailsrowData = thanaendretailsreport;
        }, (error) => {
            console.log(error);
        });
        this.thretailservice.getThanaStartRetailsReport().subscribe((thanastartretailreport) => {
            this.startretailsrowData = thanastartretailreport;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    ThanaEndRetailsReport() {
        return [
            {
                headerName: 'End Month Retail Counts',
                children: [
                    {
                        headerName: 'District Name',
                        field: 'district_name',
                        rowGroup: true,
                        filter: true,
                    },
                    {
                        headerName: 'Thana Name',
                        field: 'thana_name',
                        rowGroup: true,
                        hide: true,
                    },
                    {
                        headerName: 'Brand Name',
                        field: 'brand_name',
                        filter: true,
                        resizablbe: true,
                        sortable: true,
                    },
                    {
                        headerName: 'Month',
                        field: 'end_month',
                        filter: true,
                        resizable: true,
                    },
                    {
                        headerName: 'Retail',
                        field: 'end_retail_counts',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
        ];
    }
    ThanaStartRetailsReport() {
        return [
            {
                headerName: 'Start Month Retail Counts',
                children: [
                    {
                        headerName: 'District Name',
                        field: 'district_name',
                        rowGroup: true,
                        filter: true,
                    },
                    {
                        headerName: 'Thana Name',
                        field: 'thana_name',
                        filter: true,
                        rowGroup: true,
                        hide: true,
                    },
                    {
                        headerName: 'Brand Name',
                        field: 'brand_name',
                        filter: true,
                        resizablbe: true,
                        sortable: true,
                    },
                    {
                        headerName: 'Month',
                        field: 'start_month',
                        filter: true,
                        resizable: true,
                    },
                    {
                        headerName: 'Retail',
                        field: 'start_retail_counts',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
        ];
    }
}
ThanaretailsComponent.ɵfac = function ThanaretailsComponent_Factory(t) { return new (t || ThanaretailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_thanaretailsreports_service__WEBPACK_IMPORTED_MODULE_2__["ThanaRetailsReportService"])); };
ThanaretailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThanaretailsComponent, selectors: [["app-thanaretails"]], decls: 9, vars: 6, consts: [[1, "header"], [1, "row"], [1, "column"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "justify-content", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"]], template: function ThanaretailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "District & Month-wise Thana Retails Count Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function ThanaretailsComponent_Template_ag_grid_angular_gridReady_6_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function ThanaretailsComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.endretailscolumnDefs)("rowData", ctx.endretailsrowData)("groupIncludeTotalFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.startretailscolumnDefs)("rowData", ctx.startretailsrowData)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 50%;\n  padding: 5px;\n  height: 1200px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: maroon;\n}\n\n.district[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRoYW5hcmV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InRoYW5hcmV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGZsZXg6IDUwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMjAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogbWFyb29uO1xyXG59XHJcblxyXG4uZGlzdHJpY3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBjb2xvcjogbWFyb29uO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _services_division_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/division.service */ "KWQH");
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/district.service */ "v/kp");
/* harmony import */ var _services_thana_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/thana.service */ "zED6");
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/zone.service */ "z8zG");
/* harmony import */ var _services_market_point_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/market-point.service */ "B0OP");
/* harmony import */ var _division_add_division_add_division_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./division/add-division/add-division.component */ "eqdh");
/* harmony import */ var _district_add_district_add_district_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./district/add-district/add-district.component */ "GZPH");
/* harmony import */ var _thana_add_thana_add_thana_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./thana/add-thana/add-thana.component */ "z2Ri");
/* harmony import */ var _division_division_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./division/division.component */ "dawk");
/* harmony import */ var _district_district_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./district/district.component */ "D16N");
/* harmony import */ var _thana_thana_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./thana/thana.component */ "QZXc");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../grid/grid.component */ "Ludi");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _division_division_view_division_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./division/division-view/division-view.component */ "ZuED");
/* harmony import */ var _district_district_view_district_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./district/district-view/district-view.component */ "iTQP");
/* harmony import */ var _thana_thana_view_thana_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thana/thana-view/thana-view.component */ "jd4U");
/* harmony import */ var _profile_grid_profile_grid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile-grid/profile-grid.component */ "/OJs");
/* harmony import */ var _profile_crud_profile_crud_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile-crud/profile-crud.component */ "BT9S");
/* harmony import */ var _brand_grid_brand_grid_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./brand-grid/brand-grid.component */ "q9WV");
/* harmony import */ var _brand_create_brand_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./brand-create/brand-create.component */ "QdEa");
/* harmony import */ var _brand_update_brand_update_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./brand-update/brand-update.component */ "38pd");
/* harmony import */ var _zone_grid_zone_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./zone-grid/zone-grid.component */ "CIF1");
/* harmony import */ var _zone_create_zone_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./zone-create/zone-create.component */ "ZFyw");
/* harmony import */ var _zone_update_zone_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./zone-update/zone-update.component */ "rPFT");
/* harmony import */ var _market_grid_market_grid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./market-grid/market-grid.component */ "wE/V");
/* harmony import */ var _market_create_market_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./market-create/market-create.component */ "DI67");
/* harmony import */ var _market_update_market_update_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./market-update/market-update.component */ "N15J");
/* harmony import */ var _profile_create_profile_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./profile-create/profile-create.component */ "2Q+2");
/* harmony import */ var _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./profile-update/profile-update.component */ "pnvm");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "b0Gi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _expan_pannel_expan_pannel_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./expan-pannel/expan-pannel.component */ "t/m1");
/* harmony import */ var _merchandising_grid_merchandising_grid_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./merchandising-grid/merchandising-grid.component */ "hOPk");
/* harmony import */ var _services_merchandising_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../services/merchandising.service */ "Ga5V");
/* harmony import */ var _merchandising_create_merchandising_create_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./merchandising-create/merchandising-create.component */ "jdHC");
/* harmony import */ var _merch_create_merch_create_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./merch-create/merch-create.component */ "V0Tn");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./report/report.component */ "iKvk");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./navbar/navbar.component */ "fOGv");
/* harmony import */ var _reports_thanadetailreport_thanadetailreport_thanadetailreport_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./reports/thanadetailreport/thanadetailreport/thanadetailreport.component */ "pGXm");
/* harmony import */ var _reports_districtsummaryreport_districtreport_districtreport_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./reports/districtsummaryreport/districtreport/districtreport.component */ "/NBv");
/* harmony import */ var _reports_districtsummaryreport_districtretails_districtretails_districtretails_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./reports/districtsummaryreport/districtretails/districtretails/districtretails.component */ "JGH3");
/* harmony import */ var _reports_thanasummaryreport_thanasalesreport_thanasales_thanasales_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./reports/thanasummaryreport/thanasalesreport/thanasales/thanasales.component */ "OmIG");
/* harmony import */ var _reports_thanaretails_thanaretails_thanaretails_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./reports/thanaretails/thanaretails/thanaretails.component */ "WHj0");
/* harmony import */ var _reports_marketsalessummary_market_sales_market_sales_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./reports/marketsalessummary/market-sales/market-sales.component */ "sjKD");
/* harmony import */ var _reports_outletsalesreport_outletsales_outletsales_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./reports/outletsalesreport/outletsales/outletsales.component */ "ZZCD");
/* harmony import */ var _reports_overallmokamsummaryreport_overallmokamsummaryreport_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./reports/overallmokamsummaryreport/overallmokamsummaryreport.component */ "I9t8");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./header/header.component */ "l//K");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "fP+P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/core */ "fXoL");





//Service Components








//App Components






















//Angular Material Imports






































const routes = [
    { path: 'main', component: _main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"] },
    { path: 'top-nav', component: _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_34__["TopNavComponent"] },
    { path: 'main/division', component: _division_division_component__WEBPACK_IMPORTED_MODULE_13__["DivisionComponent"] },
    { path: 'main/district-view', component: _district_district_component__WEBPACK_IMPORTED_MODULE_14__["DistrictComponent"] },
    { path: 'main/thana-view', component: _thana_thana_component__WEBPACK_IMPORTED_MODULE_15__["ThanaComponent"] },
    { path: 'main/add-division', component: _division_add_division_add_division_component__WEBPACK_IMPORTED_MODULE_10__["AddDivisionComponent"] },
    // { path: 'brand-grid', component: BrandGridComponent },
    // { path: 'brand-create', component: BrandCreateComponent },
    // { path: 'brand-update', component: BrandUpdateComponent },
    {
        path: 'brand',
        children: [
            { path: 'brand-grid', component: _brand_grid_brand_grid_component__WEBPACK_IMPORTED_MODULE_23__["BrandGridComponent"] },
            { path: 'brand-create', component: _brand_create_brand_create_component__WEBPACK_IMPORTED_MODULE_24__["BrandCreateComponent"] },
            { path: 'brand-update', component: _brand_update_brand_update_component__WEBPACK_IMPORTED_MODULE_25__["BrandUpdateComponent"] },
        ],
    },
    {
        path: 'zone',
        children: [
            { path: 'zone-grid', component: _zone_grid_zone_grid_component__WEBPACK_IMPORTED_MODULE_26__["ZoneGridComponent"] },
            { path: 'zone-create', component: _zone_create_zone_create_component__WEBPACK_IMPORTED_MODULE_27__["ZoneCreateComponent"] },
            { path: 'zone-update', component: _zone_update_zone_update_component__WEBPACK_IMPORTED_MODULE_28__["ZoneUpdateComponent"] },
        ],
    },
    // { path: 'zone-grid', component: ZoneGridComponent },
    // { path: 'zone-create', component: ZoneCreateComponent },
    // { path: 'zone-update', component: ZoneUpdateComponent },
    {
        path: 'market',
        children: [
            { path: 'market-grid', component: _market_grid_market_grid_component__WEBPACK_IMPORTED_MODULE_29__["MarketGridComponent"] },
            { path: 'market-create', component: _market_create_market_create_component__WEBPACK_IMPORTED_MODULE_30__["MarketCreateComponent"] },
            { path: 'market-update', component: _market_update_market_update_component__WEBPACK_IMPORTED_MODULE_31__["MarketUpdateComponent"] },
        ],
    },
    // { path: 'market-grid', component: MarketGridComponent },
    // { path: 'market-create', component: MarketCreateComponent },
    // { path: 'market-update', component: MarketUpdateComponent },
    {
        path: 'profile',
        children: [
            { path: 'profile-grid', component: _profile_grid_profile_grid_component__WEBPACK_IMPORTED_MODULE_21__["ProfileGridComponent"] },
            { path: 'profile-create', component: _profile_create_profile_create_component__WEBPACK_IMPORTED_MODULE_32__["ProfileCreateComponent"] },
            { path: 'profile-update', component: _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_33__["ProfileUpdateComponent"] },
        ],
    },
    // { path: 'profile-grid', component: ProfileGridComponent },
    // { path: 'profile-create', component: ProfileCreateComponent },
    // { path: 'profile-update', component: ProfileUpdateComponent },
    {
        path: 'merchandising',
        children: [
            { path: 'merchandising-grid', component: _merchandising_grid_merchandising_grid_component__WEBPACK_IMPORTED_MODULE_54__["MerchandisingGridComponent"] },
            { path: 'merchandising-create', component: _merchandising_create_merchandising_create_component__WEBPACK_IMPORTED_MODULE_56__["MerchandisingCreateComponent"] },
        ],
    },
    // {
    //   path: 'merchandising',
    //   children: [
    //     { path: 'merch-create', component: MerchCreateComponent }
    // ],
    // },
    {
        path: 'reports',
        children: [
            { path: 'overallthanareport', component: _reports_thanadetailreport_thanadetailreport_thanadetailreport_component__WEBPACK_IMPORTED_MODULE_60__["ThanadetailreportComponent"] },
            { path: 'districtreport', component: _reports_districtsummaryreport_districtreport_districtreport_component__WEBPACK_IMPORTED_MODULE_61__["DistrictReportComponent"] },
            { path: 'districtretailsreport', component: _reports_districtsummaryreport_districtretails_districtretails_districtretails_component__WEBPACK_IMPORTED_MODULE_62__["DistrictretailsComponent"] },
            { path: 'thanasalesrport', component: _reports_thanasummaryreport_thanasalesreport_thanasales_thanasales_component__WEBPACK_IMPORTED_MODULE_63__["ThanasalesComponent"] },
            { path: 'thanaretails', component: _reports_thanaretails_thanaretails_thanaretails_component__WEBPACK_IMPORTED_MODULE_64__["ThanaretailsComponent"] },
            { path: 'mokamsalesreport', component: _reports_marketsalessummary_market_sales_market_sales_component__WEBPACK_IMPORTED_MODULE_65__["MarketSalesComponent"] },
            {
                path: 'outletsalesreport',
                component: _reports_outletsalesreport_outletsales_outletsales_component__WEBPACK_IMPORTED_MODULE_66__["OutletsalesComponent"],
            },
            {
                path: 'overallmokamreports',
                component: _reports_overallmokamsummaryreport_overallmokamsummaryreport_component__WEBPACK_IMPORTED_MODULE_67__["OverallmokamsummaryreportComponent"],
            },
        ],
    },
];
class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_70__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_70__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, providers: [
        _services_division_service__WEBPACK_IMPORTED_MODULE_5__["DivisionService"],
        _services_district_service__WEBPACK_IMPORTED_MODULE_6__["DistrictService"],
        _services_thana_service__WEBPACK_IMPORTED_MODULE_7__["ThanaService"],
        _services_zone_service__WEBPACK_IMPORTED_MODULE_8__["ZoneService"],
        _services_market_point_service__WEBPACK_IMPORTED_MODULE_9__["MarketService"],
        _services_merchandising_service__WEBPACK_IMPORTED_MODULE_55__["MerchandiseService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_0__["AgGridModule"].withComponents(_grid_grid_component__WEBPACK_IMPORTED_MODULE_16__["GridComponent"]),
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_40__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_41__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__["MatSlideToggleModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_47__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__["MatMenuModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_49__["MatDividerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_70__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"],
        _district_district_component__WEBPACK_IMPORTED_MODULE_14__["DistrictComponent"],
        _division_division_component__WEBPACK_IMPORTED_MODULE_13__["DivisionComponent"],
        _thana_thana_component__WEBPACK_IMPORTED_MODULE_15__["ThanaComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_16__["GridComponent"],
        _division_division_view_division_view_component__WEBPACK_IMPORTED_MODULE_18__["DivisionViewComponent"],
        _division_add_division_add_division_component__WEBPACK_IMPORTED_MODULE_10__["AddDivisionComponent"],
        _district_district_view_district_view_component__WEBPACK_IMPORTED_MODULE_19__["DistrictViewComponent"],
        _thana_thana_view_thana_view_component__WEBPACK_IMPORTED_MODULE_20__["ThanaViewComponent"],
        _district_add_district_add_district_component__WEBPACK_IMPORTED_MODULE_11__["AddDistrictComponent"],
        _thana_add_thana_add_thana_component__WEBPACK_IMPORTED_MODULE_12__["AddThanaComponent"],
        _profile_grid_profile_grid_component__WEBPACK_IMPORTED_MODULE_21__["ProfileGridComponent"],
        _profile_crud_profile_crud_component__WEBPACK_IMPORTED_MODULE_22__["ProfileCrudComponent"],
        _brand_grid_brand_grid_component__WEBPACK_IMPORTED_MODULE_23__["BrandGridComponent"],
        _brand_create_brand_create_component__WEBPACK_IMPORTED_MODULE_24__["BrandCreateComponent"],
        _brand_update_brand_update_component__WEBPACK_IMPORTED_MODULE_25__["BrandUpdateComponent"],
        _zone_grid_zone_grid_component__WEBPACK_IMPORTED_MODULE_26__["ZoneGridComponent"],
        _zone_create_zone_create_component__WEBPACK_IMPORTED_MODULE_27__["ZoneCreateComponent"],
        _zone_update_zone_update_component__WEBPACK_IMPORTED_MODULE_28__["ZoneUpdateComponent"],
        _market_grid_market_grid_component__WEBPACK_IMPORTED_MODULE_29__["MarketGridComponent"],
        _market_create_market_create_component__WEBPACK_IMPORTED_MODULE_30__["MarketCreateComponent"],
        _market_update_market_update_component__WEBPACK_IMPORTED_MODULE_31__["MarketUpdateComponent"],
        _profile_create_profile_create_component__WEBPACK_IMPORTED_MODULE_32__["ProfileCreateComponent"],
        _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_33__["ProfileUpdateComponent"],
        _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_34__["TopNavComponent"],
        _expan_pannel_expan_pannel_component__WEBPACK_IMPORTED_MODULE_53__["ExpanPannelComponent"],
        _merchandising_grid_merchandising_grid_component__WEBPACK_IMPORTED_MODULE_54__["MerchandisingGridComponent"],
        _merchandising_create_merchandising_create_component__WEBPACK_IMPORTED_MODULE_56__["MerchandisingCreateComponent"],
        _merch_create_merch_create_component__WEBPACK_IMPORTED_MODULE_57__["MerchCreateComponent"],
        _report_report_component__WEBPACK_IMPORTED_MODULE_58__["ReportComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_59__["NavbarComponent"],
        _reports_thanadetailreport_thanadetailreport_thanadetailreport_component__WEBPACK_IMPORTED_MODULE_60__["ThanadetailreportComponent"],
        _reports_districtsummaryreport_districtreport_districtreport_component__WEBPACK_IMPORTED_MODULE_61__["DistrictReportComponent"],
        _reports_districtsummaryreport_districtretails_districtretails_districtretails_component__WEBPACK_IMPORTED_MODULE_62__["DistrictretailsComponent"],
        _reports_thanasummaryreport_thanasalesreport_thanasales_thanasales_component__WEBPACK_IMPORTED_MODULE_63__["ThanasalesComponent"],
        _reports_thanaretails_thanaretails_thanaretails_component__WEBPACK_IMPORTED_MODULE_64__["ThanaretailsComponent"],
        _reports_marketsalessummary_market_sales_market_sales_component__WEBPACK_IMPORTED_MODULE_65__["MarketSalesComponent"],
        _reports_outletsalesreport_outletsales_outletsales_component__WEBPACK_IMPORTED_MODULE_66__["OutletsalesComponent"],
        _reports_overallmokamsummaryreport_overallmokamsummaryreport_component__WEBPACK_IMPORTED_MODULE_67__["OverallmokamsummaryreportComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_68__["HeaderComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_69__["SidenavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_0__["AgGridModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["BrowserAnimationsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_40__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_41__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_47__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_48__["MatMenuModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_49__["MatDividerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_50__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"]] }); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'auth', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] }
];
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.module */ "XpXM");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid/grid.component */ "Ludi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");















// import { GridComponent } from './grid/grid.component';
const routes = [
//{path: '', pathMatch:'full', redirectTo:'home'}
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"]]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBRootModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "ZFyw":
/*!***********************************************************!*\
  !*** ./src/app/main/zone-create/zone-create.component.ts ***!
  \***********************************************************/
/*! exports provided: ZoneCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneCreateComponent", function() { return ZoneCreateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/zone.service */ "z8zG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ZoneCreateComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function ZoneCreateComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ZoneCreateComponent_form_18_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const fg_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.zoneSubmit(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fg_r2.invalid);
} }
class ZoneCreateComponent {
    constructor(fb, zoneservice, router) {
        this.fb = fb;
        this.zoneservice = zoneservice;
        this.router = router;
        this.zoneForms = this.fb.array([]);
    }
    ngOnInit() { }
    addZoneForm() {
        this.zoneForms.push(this.fb.group({
            zone_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zone_name: [''],
        }));
    }
    zoneSubmit(fg) {
        this.zoneservice.createZone(fg.value).subscribe((res) => {
            fg.patchValue({ zone_code: res.zone_code });
            this.showNotification('insert');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'insert':
                this.notification = { class: 'text-success', message: 'saved!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
ZoneCreateComponent.ɵfac = function ZoneCreateComponent_Factory(t) { return new (t || ZoneCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ZoneCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ZoneCreateComponent, selectors: [["app-zone-create"]], decls: 19, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], [1, "btn", "btn-outline-success", 2, "width", "180px", 3, "click"], [1, "fa", "fa-plus"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "zone_code", 1, "form-control", 2, "width", "140px"], ["formControlName", "zone_name", 1, "form-control", 2, "width", "250px"], ["type", "submit", 1, "btn", "btn-success", 2, "width", "130px", 3, "disabled"], [1, "far", "fa-save", "fa-lg"]], template: function ZoneCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Zone Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Zone Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoneCreateComponent_Template_button_click_11_listener() { return ctx.addZoneForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " New Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ZoneCreateComponent_span_16_Template, 3, 4, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ZoneCreateComponent_form_18_Template, 9, 2, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.zoneForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx6b25lLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBRUUsbUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTs7RUFFRSxxQkFBQTtBQUdGOztBQUFBO0VBRUUsdUNBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBTUE7RUFDRTtJQUNFLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InpvbmUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtdGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi50aGVhZCB7XHJcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcclxufVxyXG4udGJvZHkge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAvLyB3aWR0aDogOTBweDtcclxuICAvLyBoZWlnaHQ6IDM5MHB4O1xyXG59XHJcbi50ciB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi50ZCB7XHJcbiAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4udGhlYWQgZGl2LnRyIGRpdi50ZDpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbmk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5lbGVtZW50VG9GYWRlSW5BbmRPdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWlub3V0IDJzIGxpbmVhciBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZZCD":
/*!*************************************************************************************!*\
  !*** ./src/app/main/reports/outletsalesreport/outletsales/outletsales.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OutletsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletsalesComponent", function() { return OutletsalesComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_outletsalesreport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/outletsalesreport.service */ "Vc6x");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class OutletsalesComponent {
    constructor(outletsalesreportservice) {
        this.outletsalesreportservice = outletsalesreportservice;
        this.outletsalesColumnDefs = this.OutletSalesReport();
    }
    ngOnInit() {
        this.outletsalesreportservice.getOutletSalesReport().subscribe((outletsalesreport) => {
            this.outletsalesrowData = outletsalesreport;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    OutletSalesReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                rowGroup: true,
                filter: true,
                resizable: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                rowGroup: true,
            },
            {
                headerName: 'Mokam',
                field: 'market_name',
                rowGroup: true,
            },
            {
                headerName: 'Outlet Name',
                field: 'outlet_name',
                filter: true,
                resizable: true,
            },
            {
                headerName: 'Brand',
                field: 'brand_name',
                filter: true,
                resizable: true,
            },
            {
                headerName: 'End Month Sales Volume/Share',
                children: [
                    {
                        headerName: 'Month Name',
                        field: 'end_month',
                        filter: true,
                    },
                    {
                        headerName: 'Sales',
                        field: 'volume_end',
                        sortable: true,
                        resizable: true,
                        aggFunc: 'sum',
                        valueParser: 'Number(newValue)',
                    },
                    {
                        headerName: 'Share',
                        field: 'end_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
            {
                headerName: 'Start Month Sales/Share',
                children: [
                    {
                        headerName: 'Month Name',
                        field: 'start_month',
                        filter: true,
                    },
                    {
                        headerName: 'Sales',
                        field: 'volume_start',
                        sortable: true,
                        resizable: true,
                    },
                    {
                        headerName: 'Share',
                        field: 'start_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
        ];
    }
}
OutletsalesComponent.ɵfac = function OutletsalesComponent_Factory(t) { return new (t || OutletsalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_outletsalesreport_service__WEBPACK_IMPORTED_MODULE_2__["OutletSalesReportService"])); };
OutletsalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OutletsalesComponent, selectors: [["app-outletsales"]], decls: 5, vars: 4, consts: [[1, "header"], ["id", "myGrid", 1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "justify-content", "center", 3, "columnDefs", "rowData", "animateRows", "groupIncludeTotalFooter", "gridReady"]], template: function OutletsalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "District & Month-wise Outlet Sales Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function OutletsalesComponent_Template_ag_grid_angular_gridReady_4_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.outletsalesColumnDefs)("rowData", ctx.outletsalesrowData)("animateRows", true)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG91dGxldHNhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6Im91dGxldHNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZuED":
/*!************************************************************************!*\
  !*** ./src/app/main/division/division-view/division-view.component.ts ***!
  \************************************************************************/
/*! exports provided: DivisionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionViewComponent", function() { return DivisionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_division_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/division.service */ "KWQH");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");



class DivisionViewComponent {
    // @Output() new createNewDivision = new EventEmitter();
    // inject the athleteService
    constructor(divisionservice) {
        this.divisionservice = divisionservice;
        this.columnDefs = this.createColumnDefs();
    }
    // on init, subscribe to the athelete data
    ngOnInit() {
        this.divisionservice.getDivisions().subscribe((divisions) => {
            this.rowData = divisions;
        }, (error) => {
            console.log(error);
        });
        // newDivision(){
        //     this.createNewDivision.emit();
        // }
    }
    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    }
    // create some simple column definitions
    createColumnDefs() {
        return [
            {
                headerName: 'Division Code',
                field: 'division_code',
                editable: false,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Division Name',
                field: 'division_name',
                filter: true,
                resizable: true,
                editable: true,
                sortable: true,
            },
        ];
    }
}
DivisionViewComponent.ɵfac = function DivisionViewComponent_Factory(t) { return new (t || DivisionViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_division_service__WEBPACK_IMPORTED_MODULE_1__["DivisionService"])); };
DivisionViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DivisionViewComponent, selectors: [["app-division-view"]], decls: 1, vars: 4, consts: [[1, "ag-theme-alpine", 2, "width", "50%", "height", "450px", 3, "columnDefs", "rowData", "pagination", "paginationAutoPageSize", "gridReady"]], template: function DivisionViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ag-grid-angular", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function DivisionViewComponent_Template_ag_grid_angular_gridReady_0_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData)("pagination", true)("paginationAutoPageSize", true);
    } }, directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXZpc2lvbi12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "b0Gi":
/*!***************************************************!*\
  !*** ./src/app/main/top-nav/top-nav.component.ts ***!
  \***************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








const _c0 = ["sidenav"];
function TopNavComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { rotated: a0 }; };
function TopNavComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.showSubmenu));
} }
function TopNavComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_15_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r11.showSubSubMenu));
} }
const _c2 = function (a0) { return { expanded: a0 }; };
function TopNavComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r12.showSubSubMenu));
} }
function TopNavComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_15_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showSubSubMenu = !ctx_r13.showSubSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_15_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_15_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_15_div_4_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r3.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isExpanded || ctx_r3.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isExpanded || ctx_r3.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isShowing || ctx_r3.isExpanded);
} }
function TopNavComponent_div_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Division");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_16_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r16.showDivisionSubMenu));
} }
function TopNavComponent_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Division Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r17.showDivisionSubMenu));
} }
function TopNavComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_16_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showDivisionSubMenu = !ctx_r18.showDivisionSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_16_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_16_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_16_div_4_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r4.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isExpanded || ctx_r4.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isExpanded || ctx_r4.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowing || ctx_r4.isExpanded);
} }
function TopNavComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "District");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_17_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r21.showDistrictSubMenu));
} }
function TopNavComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "District Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r22.showDistrictSubMenu));
} }
function TopNavComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_17_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.showDistrictSubMenu = !ctx_r23.showDistrictSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_17_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_17_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_17_div_4_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r5.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isExpanded || ctx_r5.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isExpanded || ctx_r5.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isShowing || ctx_r5.isExpanded);
} }
function TopNavComponent_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_18_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r26.showThanaSubMenu));
} }
function TopNavComponent_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thana Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r27.showThanaSubMenu));
} }
function TopNavComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_18_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.showThanaSubMenu = !ctx_r28.showThanaSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_18_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_18_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_18_div_4_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r6.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isExpanded || ctx_r6.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isExpanded || ctx_r6.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isShowing || ctx_r6.isExpanded);
} }
function TopNavComponent_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_19_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r31.showZoneSubMenu));
} }
function TopNavComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zone Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zone Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Zone Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r32.showZoneSubMenu));
} }
function TopNavComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_19_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.showZoneSubMenu = !ctx_r33.showZoneSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_19_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_19_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_19_div_4_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r7.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isExpanded || ctx_r7.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isExpanded || ctx_r7.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isShowing || ctx_r7.isExpanded);
} }
function TopNavComponent_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_20_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r36.showBrandSubMenu));
} }
function TopNavComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brand Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Brand Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brand Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r37.showBrandSubMenu));
} }
function TopNavComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_20_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.showBrandSubMenu = !ctx_r38.showBrandSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_20_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_20_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_20_div_4_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r8.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isExpanded || ctx_r8.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isExpanded || ctx_r8.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isShowing || ctx_r8.isExpanded);
} }
function TopNavComponent_div_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopNavComponent_div_21_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r41.showMarketSubMenu));
} }
function TopNavComponent_div_21_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Market Grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Market Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Market Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r42.showMarketSubMenu));
} }
function TopNavComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_div_21_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.showMarketSubMenu = !ctx_r43.showMarketSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopNavComponent_div_21_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_div_21_mat_icon_3_Template, 2, 3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopNavComponent_div_21_div_4_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r9.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isExpanded || ctx_r9.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isExpanded || ctx_r9.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isShowing || ctx_r9.isExpanded);
} }
class TopNavComponent {
    constructor() {
        this.isExpanded = true;
        this.showSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
        this.showDistrictSubMenu = false;
        this.showDivisionSubMenu = false;
        this.showThanaSubMenu = false;
        this.showZoneSubMenu = false;
        this.showBrandSubMenu = false;
        this.showMarketSubMenu = false;
    }
    mouseenter() {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }
    mouseleave() {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }
    ngOnInit() { }
}
TopNavComponent.ɵfac = function TopNavComponent_Factory(t) { return new (t || TopNavComponent)(); };
TopNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopNavComponent, selectors: [["app-top-nav"]], viewQuery: function TopNavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 24, vars: 9, consts: [["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], ["routerLink", "/main", 1, "example-app-name"], ["autosize", "", 1, "example-container"], ["mode", "side", "opened", "true", 1, "example-sidenav", 3, "mouseenter", "mouseleave"], ["sidenav", ""], [1, "parent", 3, "click"], ["class", "full-width", 4, "ngIf"], ["mat-list-icon", ""], ["class", "menu-button", 3, "ngClass", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], [1, "example-sidenav-content"], [1, "full-width"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["routerLink", "/profile/profile-grid"], ["routerLink", "/profile/profile-create"], ["routerLink", "/profile/profile-update"], ["routerLink", "/main/division"], ["routerLink", "/main/district-view"], ["routerLink", "/main/thana-view"], ["routerLink", "/zone/zone-grid"], ["routerLink", "/zone/zone-create"], ["routerLink", "/zone/zone-update"], ["routerLink", "/brand/brand-grid"], ["routerLink", "/brand/brand-create"], ["routerLink", "/brand/brand-update"], ["routerLink", "/market/market-grid"], ["routerLink", "/market/market-create"], ["routerLink", "/market/market-update"]], template: function TopNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_Template_button_click_1_listener() { return ctx.isExpanded = !ctx.isExpanded; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TopNavComponent_Template_mat_sidenav_mouseenter_7_listener() { return ctx.mouseenter(); })("mouseleave", function TopNavComponent_Template_mat_sidenav_mouseleave_7_listener() { return ctx.mouseleave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_Template_mat_list_item_click_10_listener() { return ctx.showSubmenu = !ctx.showSubmenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopNavComponent_span_11_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TopNavComponent_mat_icon_14_Template, 2, 3, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TopNavComponent_div_15_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TopNavComponent_div_16_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TopNavComponent_div_17_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TopNavComponent_div_18_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TopNavComponent_div_19_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopNavComponent_div_20_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TopNavComponent_div_21_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 600px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  width: 75%;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  transition: 300ms ease-in-out;\n  transform: rotate(0deg);\n}\n\n.menu-button.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.submenu[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  transition: transform 300ms ease;\n  transform: scaleY(0);\n  transform-origin: top;\n}\n\n.submenu.expanded[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b3AtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBRkE7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSx5QkFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFPRjs7QUFKQTtFQUNFLG9CQUFBO0FBT0YiLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn1cclxuLm1lbnUtYnV0dG9uLnJvdGF0ZWQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLnN1Ym1lbnUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zdWJtZW51LmV4cGFuZGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "dawk":
/*!*****************************************************!*\
  !*** ./src/app/main/division/division.component.ts ***!
  \*****************************************************/
/*! exports provided: DivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionComponent", function() { return DivisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_division_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/division.service */ "KWQH");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _division_view_division_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./division-view/division-view.component */ "ZuED");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_division_add_division_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-division/add-division.component */ "eqdh");







function DivisionComponent_app_add_division_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-division");
} }
class DivisionComponent {
    constructor(divisionservice) {
        this.divisionservice = divisionservice;
        this.add_division = false;
        this.divisions = [];
    }
    loadaddform() {
        this.add_division = true;
    }
    ngOnInit() {
        this.divisionservice.getDivisions().subscribe((data) => {
            this.divisions = data;
            console.log(data);
        }, (error) => console.log(error));
        // this.divisionservice.createDivision().subscribe()
    }
}
DivisionComponent.ɵfac = function DivisionComponent_Factory(t) { return new (t || DivisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_division_service__WEBPACK_IMPORTED_MODULE_1__["DivisionService"])); };
DivisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DivisionComponent, selectors: [["app-division"]], inputs: { divisions: "divisions" }, decls: 7, vars: 1, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [3, "click"], [4, "ngIf"]], template: function DivisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-division-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DivisionComponent_Template_button_click_4_listener() { return ctx.loadaddform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add division");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DivisionComponent_app_add_division_6_Template, 1, 0, "app-add-division", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add_division);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _division_view_division_view_component__WEBPACK_IMPORTED_MODULE_4__["DivisionViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _add_division_add_division_component__WEBPACK_IMPORTED_MODULE_6__["AddDivisionComponent"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaXZpc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJkaXZpc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "eqdh":
/*!**********************************************************************!*\
  !*** ./src/app/main/division/add-division/add-division.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddDivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDivisionComponent", function() { return AddDivisionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_division_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/division.service */ "KWQH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function AddDivisionComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Division Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddDivisionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddDivisionComponent_div_5_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.division_code.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddDivisionComponent {
    constructor(divisionservice, router) {
        this.divisionservice = divisionservice;
        this.router = router;
        this.submitted = false;
        this.divisionform = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            division_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            division_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.addDivision = () => {
            console.log(this.divisionform.value);
            this.divisionservice
                .createDivision(this.divisionform.value.division_code, this.divisionform.value.division_name)
                .subscribe((result) => console.log(result), (error) => console.log(error));
        };
    }
    ngOnInit() { }
    get f() {
        return this.divisionform.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.divisionform.invalid) {
            return;
        }
    }
}
AddDivisionComponent.ɵfac = function AddDivisionComponent_Factory(t) { return new (t || AddDivisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_division_service__WEBPACK_IMPORTED_MODULE_2__["DivisionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddDivisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddDivisionComponent, selectors: [["app-add-division"]], decls: 14, vars: 8, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "division_code", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "division_name"], ["type", "submit"], [1, "invalid-feedback"], [4, "ngIf"]], template: function AddDivisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddDivisionComponent_Template_form_ngSubmit_0_listener() { return ctx.addDivision(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Division Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddDivisionComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Division Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.divisionform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.division_code.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.division_code.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 4, ctx.divisionform.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["label[_ngcontent-%COMP%] {\n  text-align: left;\n  display: block;\n  padding: 0.5em 1.5em 0.5em 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 15%;\n  padding: 0.7em;\n  margin-bottom: 0.5rem;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 3px solid rgba(0, 255, 42, 0.884);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWRpdmlzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBDQUFBO0FBQ0o7O0FBUUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFMSiIsImZpbGUiOiJhZGQtZGl2aXNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbSAwLjVlbSAwO1xyXG4gIH1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAzcHggc29saWQgcmdiYSgwLCAyNTUsIDQyLCAwLjg4NCk7XHJcbiAgfVxyXG5cclxuLy8gZm9ybSBidXR0b24ge1xyXG4vLyAgICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4vLyAgICAgcGFkZGluZzogMC43ZW07XHJcbi8vICAgICBib3JkZXI6IDA7XHJcbi8vICAgfVxyXG5cclxuICBib2R5e1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuXHJcbiAgXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "fOGv":
/*!*************************************************!*\
  !*** ./src/app/main/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavbarComponent {
    constructor() { }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 73, vars: 8, consts: [["color", "primary"], ["mat-button", "", 2, "background-color", "yellow", "font-size", "15px", "margin", "30px", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/main/district-view"], ["menu2", "matMenu"], ["mat-menu-item", "", "routerLink", "/main/thana-view"], ["menu3", "matMenu"], ["mat-menu-item", "", "routerLink", "/zone/zone-grid"], ["mat-menu-item", "", "routerLink", "/zone/zone-create"], ["mat-menu-item", "", "routerLink", "/zone/zone-update"], ["menu4", "matMenu"], ["mat-menu-item", "", "routerLink", "/market/market-grid"], ["mat-menu-item", "", "routerLink", "/market/market-create"], ["mat-menu-item", "", "routerLink", "/market/market-update"], ["menu5", "matMenu"], ["mat-menu-item", "", "routerLink", "/brand/brand-grid"], ["mat-menu-item", "", "routerLink", "/brand/brand-create"], ["mat-menu-item", "", "routerLink", "/brand/brand-update"], ["menu6", "matMenu"], ["mat-menu-item", "", "routerLink", "/profile/profile-grid"], ["mat-menu-item", "", "routerLink", "/profile/profile-create"], ["mat-menu-item", "", "routerLink", "/profile/profile-update"], ["menu7", "matMenu"], ["mat-menu-item", "", "routerLink", "/merchandising/merchandising-grid"], ["menu8", "matMenu"], ["href", "http://localhost:8080/jasperserver/flow.html?_flowId=searchFlow&lastMode=true", "target", "_blank", "mat-menu-item", ""], ["src", "assets/img/crc.jpeg"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CrownRPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " View District Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Thana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", 2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " View Thana Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", 2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " View Zone Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Create a Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Update or Delete a Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Mokam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-menu", 2, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " View Mokam Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Create a New Mokam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Update or Delete a Mokam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-menu", 2, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " View Brand Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Create a Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Update or Delete a Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Outlet Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-menu", 2, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " View Profile Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Create a Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Update or Delete a Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Merchandising ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-menu", 2, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " View Merchandising Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-menu", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "View Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".mat-menu-panel[_ngcontent-%COMP%] {\n  min-width: 35px;\n}\n\n[_nghost-%COMP%]     .mat-menu-panel {\n  min-width: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZW51LXBhbmVsIHtcclxuICBtaW4td2lkdGg6IDM1cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgbWluLXdpZHRoOiAzNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fP+P":
/*!***************************************************!*\
  !*** ./src/app/main/sidenav/sidenav.component.ts ***!
  \***************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class SidenavComponent {
    constructor() { }
    ngOnInit() { }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 109, vars: 0, consts: [["matSubheader", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "division"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "district-view"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "thana-view"], ["multi", "", 1, "example-headers-align"], [1, "expan-pannel"], [1, "mat-expansion-panel-header-description"], ["routerLink", "/brand/brand-grid", 1, "profile"], ["routerLink", "/brand/brand-create", 1, "profile"], ["routerLink", "/brand/brand-update", 1, "profile"], ["routerLink", "/zone/zone-grid", 1, "profile"], ["routerLink", "/zone/zone-create", 1, "profile"], ["routerLink", "/zone/zone-update", 1, "profile"], ["routerLink", "/market/market-grid", 1, "profile"], ["routerLink", "/market/market-create", 1, "profile"], ["routerLink", "/market/market-update", 1, "profile"], ["routerLink", "/profile/profile-grid", 1, "profile"], ["routerLink", "/profile/profile-create", 1, "profile"], ["routerLink", "/profile/profile-update", 1, "profile"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Division");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Thana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CRUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-accordion", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-panel-description", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " View, Create, Update or Delete a Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Brand Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create a New Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Update or Delete a Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-accordion", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-panel-description", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Create, Update or Delete a Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Zone Grid View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Create a New Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Update or Delete a Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-accordion", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-panel-description", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Create, Update or Delete a Market/Mokam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "storefront");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Market Grid View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Create a New Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Update or Delete a Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-accordion", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-panel-description", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " View, Create, Update or Delete a Outlet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "add_business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Profile Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-list-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Create a New Outlet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Update or Delete a Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQUoiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAubWF0LWljb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLnByb2ZpbGUtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fjDG":
/*!**************************************************!*\
  !*** ./src/app/services/overallmokam.service.ts ***!
  \**************************************************/
/*! exports provided: OverallMokamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallMokamService", function() { return OverallMokamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class OverallMokamService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.mokamsummaryUrl = 'http://127.0.0.1:8000/api/report/mokamsummary';
        this.crownmokamsummaryUrl = 'http://127.0.0.1:8000/api/report/crownmokamsummary';
        this.leadingmokamsummaryUrl = 'http://127.0.0.1:8000/api/report/leadingbrandmokamsummary';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getMokamSummaryReport() {
        return this.httpClient.get(this.mokamsummaryUrl);
    }
    getCrownMokamSummaryReport() {
        return this.httpClient.get(this.crownmokamsummaryUrl);
    }
    getLeadingBrandMokamSummaryReport() {
        return this.httpClient.get(this.leadingmokamsummaryUrl);
    }
}
OverallMokamService.ɵfac = function OverallMokamService_Factory(t) { return new (t || OverallMokamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OverallMokamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OverallMokamService, factory: OverallMokamService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hOPk":
/*!*************************************************************************!*\
  !*** ./src/app/main/merchandising-grid/merchandising-grid.component.ts ***!
  \*************************************************************************/
/*! exports provided: MerchandisingGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandisingGridComponent", function() { return MerchandisingGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_merchandising_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/merchandising.service */ "Ga5V");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class MerchandisingGridComponent {
    constructor(merchservice) {
        this.merchservice = merchservice;
        this.isExpanded = true;
        this.columnDefs = this.createColumnDefs();
    }
    ngOnInit() {
        this.merchservice.getMerchandise().subscribe((merchandises) => {
            this.rowData = merchandises;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        // this.api.sizeColumnsToFit();
    }
    createColumnDefs() {
        return [
            {
                headerName: ' Outlet ID ',
                field: 'outlet_id',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Visit Month',
                field: 'date',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Brand Code',
                field: 'brand_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Merchandising Tools',
                field: 'merchandising_tools',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Quantity',
                field: 'quantity',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
        ];
    }
}
MerchandisingGridComponent.ɵfac = function MerchandisingGridComponent_Factory(t) { return new (t || MerchandisingGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_merchandising_service__WEBPACK_IMPORTED_MODULE_1__["MerchandiseService"])); };
MerchandisingGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MerchandisingGridComponent, selectors: [["app-merchandising-grid"]], decls: 4, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "600px", 3, "columnDefs", "rowData", "gridReady"]], template: function MerchandisingGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function MerchandisingGridComponent_Template_ag_grid_angular_gridReady_3_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZXJjaGFuZGlzaW5nLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibWVyY2hhbmRpc2luZy1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "iKvk":
/*!*************************************************!*\
  !*** ./src/app/main/report/report.component.ts ***!
  \*************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReportComponent {
    constructor() { }
    ngOnInit() { }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 0, vars: 0, template: function ReportComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "iTQP":
/*!************************************************************************!*\
  !*** ./src/app/main/district/district-view/district-view.component.ts ***!
  \************************************************************************/
/*! exports provided: DistrictViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictViewComponent", function() { return DistrictViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/district.service */ "v/kp");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");



//import {District} from '../model/district';
class DistrictViewComponent {
    // inject the athleteService
    constructor(districtservice) {
        this.districtservice = districtservice;
        this.columnDefs = this.createColumnDefs();
    }
    // on init, subscribe to the athelete data
    ngOnInit() {
        this.districtservice.getDistrict().subscribe((districts) => {
            this.rowData = districts;
        }, (error) => {
            console.log(error);
        });
    }
    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    }
    // create some simple column definitions
    createColumnDefs() {
        return [
            {
                headerName: 'District Code',
                field: 'district_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'District Name',
                field: 'district_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
        ];
    }
}
DistrictViewComponent.ɵfac = function DistrictViewComponent_Factory(t) { return new (t || DistrictViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_district_service__WEBPACK_IMPORTED_MODULE_1__["DistrictService"])); };
DistrictViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DistrictViewComponent, selectors: [["app-district-view"]], decls: 1, vars: 2, consts: [[1, "ag-theme-alpine", 2, "width", "75%", "height", "450px", 3, "columnDefs", "rowData", "gridReady"]], template: function DistrictViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ag-grid-angular", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function DistrictViewComponent_Template_ag_grid_angular_gridReady_0_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData);
    } }, directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXN0cmljdC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jd4U":
/*!***************************************************************!*\
  !*** ./src/app/main/thana/thana-view/thana-view.component.ts ***!
  \***************************************************************/
/*! exports provided: ThanaViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaViewComponent", function() { return ThanaViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_thana_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/thana.service */ "zED6");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");



//import {District} from '../model/district';
class ThanaViewComponent {
    // inject the athleteService
    constructor(thanaservice) {
        this.thanaservice = thanaservice;
        this.columnDefs = this.createColumnDefs();
    }
    // on init, subscribe to the athelete data
    ngOnInit() {
        this.thanaservice.getThana().subscribe(thanas => {
            this.rowData = thanas;
        }, error => {
            console.log(error);
        });
        // this.thanaservice.updateThana().subscribe(
        //     thanas => {
        //         this.rowData = thanas
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // )
    }
    onCellValueChanged(event) {
        //console.log(event) to test it
        event.data.modified = true;
    }
    getAllData() {
        let rowData = [];
        this.gridApi.forEachNode((node) => rowData.push(node.data));
        return rowData;
    }
    // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    }
    saveModifiedRows() {
        const rowData = [];
        this.gridApi.forEachNode((node) => rowData.push(node.data));
        const modifiedRows = rowData.filter(row => row['modified']);
        // add API call to save modified rows
    }
    // create some simple column definitions
    createColumnDefs() {
        return [
            { headerName: "Thana Code",
                field: 'thana_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true },
            { headerName: 'Thana Name',
                field: 'thana_name',
                filter: true,
                editable: true,
                resizable: true,
                sortable: true
            }
        ];
    }
}
ThanaViewComponent.ɵfac = function ThanaViewComponent_Factory(t) { return new (t || ThanaViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_thana_service__WEBPACK_IMPORTED_MODULE_1__["ThanaService"])); };
ThanaViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThanaViewComponent, selectors: [["app-thana-view"]], decls: 1, vars: 4, consts: [[1, "ag-theme-alpine", 2, "width", "100%", "height", "450px", 3, "columnDefs", "rowData", "pagination", "paginationAutoPageSize", "gridReady", "onCellValueChanged"]], template: function ThanaViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ag-grid-angular", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function ThanaViewComponent_Template_ag_grid_angular_gridReady_0_listener($event) { return ctx.onGridReady($event); })("onCellValueChanged", function ThanaViewComponent_Template_ag_grid_angular_onCellValueChanged_0_listener($event) { return ctx.onCellValueChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData)("pagination", true)("paginationAutoPageSize", true);
    } }, directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFuYS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jdHC":
/*!*****************************************************************************!*\
  !*** ./src/app/main/merchandising-create/merchandising-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MerchandisingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchandisingCreateComponent", function() { return MerchandisingCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");




function MerchandisingCreateComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Merchandising Tools: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Qunatity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchandisingCreateComponent_div_2_div_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const skillIndex_r5 = ctx.index; const empIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeEmployeeSkill(empIndex_r2, skillIndex_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillIndex_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", skillIndex_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillIndex_r5, " Brand Code : ");
} }
function MerchandisingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Outlet ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Visit Month: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchandisingCreateComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const empIndex_r2 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.removeEmployee(empIndex_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MerchandisingCreateComponent_div_2_div_11_Template, 10, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchandisingCreateComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const empIndex_r2 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addEmployeeSkill(empIndex_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add Brands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", empIndex_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", empIndex_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.employeeSkills(empIndex_r2).controls);
} }
//import { Observable }    from 'rxjs/Observable';
class MerchandisingCreateComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.empForm = this.fb.group({
            employees: this.fb.array([]),
        });
    }
    employees() {
        return this.empForm.get('employees');
    }
    newEmployee() {
        return this.fb.group({
            firstName: '',
            lastName: '',
            skills: this.fb.array([]),
        });
    }
    addEmployee() {
        this.employees().push(this.newEmployee());
    }
    removeEmployee(empIndex) {
        this.employees().removeAt(empIndex);
    }
    employeeSkills(empIndex) {
        return this.employees().at(empIndex).get('skills');
    }
    newSkill() {
        return this.fb.group({
            skill: '',
            exp: '',
        });
    }
    addEmployeeSkill(empIndex) {
        this.employeeSkills(empIndex).push(this.newSkill());
    }
    removeEmployeeSkill(empIndex, skillIndex) {
        this.employeeSkills(empIndex).removeAt(skillIndex);
    }
    onSubmit() {
        console.log(this.empForm.value);
    }
}
MerchandisingCreateComponent.ɵfac = function MerchandisingCreateComponent_Factory(t) { return new (t || MerchandisingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
MerchandisingCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MerchandisingCreateComponent, selectors: [["app-merchandising-create"]], decls: 5, vars: 2, consts: [[3, "formGroup", "ngSubmit"], ["formArrayName", "employees"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [2, "border", "1px solid blue", "padding", "10px", "width", "600px", "margin", "5px", 3, "formGroupName"], ["type", "text", "formControlName", "firstName"], ["type", "text", "formControlName", "lastName"], [3, "click"], ["formArrayName", "skills"], [3, "formGroupName"], ["type", "text", "formControlName", "skill"], ["type", "text", "formControlName", "exp"]], template: function MerchandisingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MerchandisingCreateComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MerchandisingCreateComponent_div_2_Template, 14, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MerchandisingCreateComponent_Template_button_click_3_listener() { return ctx.addEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.empForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees().controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZXJjaGFuZGlzaW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoibWVyY2hhbmRpc2luZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "l//K":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







class HeaderComponent {
    constructor() {
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleSideBarForMe: "toggleSideBarForMe" }, decls: 50, vars: 2, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], ["routerLink", "/main", 1, "example-app-name"], ["src", "../../assets/img/crown_logo.png"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayoutGap", "20px"], [1, "report"], ["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/reports/districtreport"], ["mat-menu-item", "", "routerLink", "/reports/thanasalesrport"], ["mat-menu-item", "", "routerLink", "/reports/districtretailsreport"], ["mat-menu-item", "", "routerLink", "/reports/thanaretails"], ["mat-menu-item", "", "routerLink", "/reports/overallthanareport"], ["mat-menu-item", "", "routerLink", "/reports/mokamsalesreport"], ["mat-menu-item", "", "routerLink", "/reports/outletsalesreport"], ["mat-menu-item", "", "routerLink", "/reports/overallmokamreports"], ["mat-icon-button", ""], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "summarize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Month-wise District Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Thana-wise District Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Month-wise District Retails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Month-wise Thana Retails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Overall Thana Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mokam Sales Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Outlet Sales Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Overall Mokam Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-menu", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Sign out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "myKr":
/*!******************************************************!*\
  !*** ./src/app/services/thanasalesreport.service.ts ***!
  \******************************************************/
/*! exports provided: ThanaSalesReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaSalesReportService", function() { return ThanaSalesReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ThanaSalesReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.thanasalesUrl = 'http://127.0.0.1:8000/api/report/thanasalesvolume';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getThanaSalesReport() {
        return this.httpClient.get(this.thanasalesUrl);
    }
}
ThanaSalesReportService.ɵfac = function ThanaSalesReportService_Factory(t) { return new (t || ThanaSalesReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ThanaSalesReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThanaSalesReportService, factory: ThanaSalesReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pGXm":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/reports/thanadetailreport/thanadetailreport/thanadetailreport.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ThanadetailreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanadetailreportComponent", function() { return ThanadetailreportComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_thanadetailreport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/thanadetailreport.service */ "tCd9");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class ThanadetailreportComponent {
    constructor(thanadetailservice) {
        this.thanadetailservice = thanadetailservice;
        this.columnDefs = this.ThanaDetailsReport();
        this.crownColumnDefs = this.CrownDetailsReport();
        this.leadingColumnDefs = this.LeadingBrandDetailReport();
    }
    ngOnInit() {
        this.thanadetailservice.getThanaDetailsReport().subscribe((thanadetailreports) => {
            this.rowData = thanadetailreports;
        }, (error) => {
            console.log(error);
        });
        this.thanadetailservice.getCrownDetailReport().subscribe((crowndetailreports) => {
            this.crownRowData = crowndetailreports;
        }, (error) => {
            console.log(error);
        });
        this.thanadetailservice.getLeadingBrandDetailReport().subscribe((leadingdetailreports) => {
            this.leadingRowData = leadingdetailreports;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    ThanaDetailsReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                filter: true,
                rowGroup: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Mokam',
                field: 'mokam',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Month Name',
                field: 'end_month',
                filter: true,
            },
            {
                headerName: 'Total Retail',
                field: 'total_retail',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Market Size',
                field: 'Market_Size',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
        ];
    }
    CrownDetailsReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                filter: true,
                sortable: true,
                resizable: true,
                rowGroup: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Month',
                field: 'end_month',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Mokam',
                field: 'crown_presence_mokam',
                filter: true,
                resizable: true,
                sortable: true,
                // editable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Retail',
                field: 'crown_retail',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Sales',
                field: 'crown_sales',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Share',
                field: 'Crown_Share',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
        ];
    }
    LeadingBrandDetailReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                filter: true,
                sortable: true,
                rowGroup: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Month',
                field: 'end_month',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Brand Name',
                field: 'brand_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Retail',
                field: 'LeadingBrandRetail',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Sales',
                field: 'LeadingBrandSales',
                filter: true,
                resizable: true,
                sortable: true,
                aggFunc: 'sum',
                valueParser: 'Number(newValue)',
            },
            {
                headerName: 'Share',
                field: 'Leading_brand_share',
                filter: true,
                resizable: true,
                sortable: true,
            },
        ];
    }
}
ThanadetailreportComponent.ɵfac = function ThanadetailreportComponent_Factory(t) { return new (t || ThanadetailreportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_thanadetailreport_service__WEBPACK_IMPORTED_MODULE_2__["Thanadetailservice"])); };
ThanadetailreportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThanadetailreportComponent, selectors: [["app-thanadetailreport"]], decls: 13, vars: 9, consts: [[1, "header"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "400px", "align-items", "center", 3, "columnDefs", "rowData", "groupIncludeTotalFooter", "gridReady"]], template: function ThanadetailreportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Overall Thana Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Thana Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function ThanadetailreportComponent_Template_ag_grid_angular_gridReady_6_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Crown Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function ThanadetailreportComponent_Template_ag_grid_angular_gridReady_9_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Leading Brand Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function ThanadetailreportComponent_Template_ag_grid_angular_gridReady_12_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData)("groupIncludeTotalFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.crownColumnDefs)("rowData", ctx.crownRowData)("groupIncludeTotalFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.leadingColumnDefs)("rowData", ctx.leadingRowData)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: ["h2[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 150%;\n  opacity: 0.65;\n  text-align: center;\n  font-weight: 1000;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: maroon;\n}\n\n.district[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n\n.month[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: 1000;\n  font-style: inherit;\n  color: maroon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRoYW5hZGV0YWlscmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InRoYW5hZGV0YWlscmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi5kaXN0cmljdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi5tb250aCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbi8vIC5jZWxsU3R5bGUge1xyXG4vLyAgIGhlaWdodDogXCIxMDAlXCI7XHJcbi8vICAgZGlzcGxheTogXCJmbGV4IFwiO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogXCJjZW50ZXJcIjtcclxuLy8gICBhbGlnbi1pdGVtczogXCJjZW50ZXIgXCI7XHJcbi8vIH1cclxuIl19 */"] });


/***/ }),

/***/ "pnvm":
/*!*****************************************************************!*\
  !*** ./src/app/main/profile-update/profile-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProfileUpdateComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function ProfileUpdateComponent_form_74_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ProfileUpdateComponent_form_74_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.profileUpdate(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileUpdateComponent_form_74_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onDelete(fg_r2.get("outlet_id").value, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
} }
class ProfileUpdateComponent {
    // applyFilter(filterValue: string) {
    //   filterValue = filterValue.trim(); // Remove whitespace
    //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //    = filterValue;
    // }
    constructor(fb, profileservice, router) {
        this.fb = fb;
        this.profileservice = profileservice;
        this.router = router;
        this.profileForms = this.fb.array([]);
    }
    ngOnInit() {
        this.profileservice.getProfile().subscribe((res) => {
            if (res == [])
                this.addProfileForm();
            else {
                res.forEach((profile) => {
                    this.profileForms.push(this.fb.group({
                        outlet_id: [profile.outlet_id],
                        outlet_type_id: [profile.outlet_type_id],
                        outlet_name: [profile.outlet_name],
                        owner_name: [profile.owner_name],
                        holding_no: [profile.holding_no],
                        road_name: [profile.road_name],
                        block_no: [profile.block_no],
                        village: [profile.village],
                        union: [profile.union],
                        post_office: [profile.post_office],
                        market_code: [profile.market_code],
                        zone_code: [profile.zone_code],
                        thana_code: [profile.thana_code],
                        district_code: [profile.district_code],
                        outlet_type: [profile.outlet_type],
                        manager_name: [profile.manager_name],
                        respondent_designation: [profile.respondent_designation],
                        contact_no1: [profile.contact_no1],
                        contact_no2: [profile.contact_no2],
                        contact_no3: [profile.contact_no3],
                        total_staff: [profile.total_staff],
                        outlet_landmark: [profile.outlet_landmark],
                        gps_lat: [profile.gps_lat],
                        gps_long: [profile.gps_long],
                        storage_capacity: [profile.storage_capacity],
                        front_length: [profile.front_length],
                        front_width: [profile.front_width],
                        weekly_holiday: [profile.weekly_holiday],
                        nid: [profile.nid],
                        survey_by: [profile.survey_by],
                        entry_by: [profile.entry_by],
                        visit_date: [profile.visit_date],
                    }));
                });
            }
        });
    }
    addProfileForm() {
        this.profileForms.push(this.fb.group({
            outlet_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_name: [''],
            owner_name: [''],
            holding_no: [''],
            road_name: [''],
            block_no: [''],
            village: [''],
            union: [''],
            post_office: [''],
            market_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zone_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            thana_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            district_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            outlet_type: [''],
            manager_name: [''],
            respondent_designation: [''],
            contact_no1: [''],
            contact_no2: [''],
            contact_no3: [''],
            total_staff: [''],
            outlet_landmark: [''],
            gps_lat: [''],
            gps_long: [''],
            storage_capacity: [''],
            front_length: [''],
            front_width: [''],
            weekly_holiday: [''],
            nid: [''],
            survey_by: [''],
            entry_by: [''],
            visit_date: [''],
        }));
    }
    profileUpdate(fg) {
        this.profileservice.updateProfile(fg.value).subscribe((res) => {
            this.showNotification('update');
        });
    }
    onDelete(outlet_id, i) {
        // if (brand_code == 0) this.brandForms.removeAt(i);
        //else if (confirm('Do you want to delete this outlet?'))
        this.profileservice.deleteProfile(outlet_id).subscribe((res) => {
            confirm('Do you want to delete this profile?');
            this.profileForms.removeAt(i);
            this.showNotification('delete');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'update':
                this.notification = { class: 'text-primary', message: 'updated!' };
                break;
            case 'delete':
                this.notification = { class: 'text-danger', message: 'deleted!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
ProfileUpdateComponent.ɵfac = function ProfileUpdateComponent_Factory(t) { return new (t || ProfileUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileUpdateComponent, selectors: [["app-profile-update"]], decls: 75, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "outlet_id", 1, "form-control", 2, "width", "135px"], ["formControlName", "outlet_type_id", 1, "form-control", 2, "width", "150px"], ["formControlName", "outlet_name", 1, "form-control", 2, "width", "380px"], ["formControlName", "owner_name", 1, "form-control", 2, "width", "300px"], ["formControlName", "holding_no", 1, "form-control", 2, "width", "70px"], ["formControlName", "road_name", 1, "form-control", 2, "width", "100px"], ["formControlName", "block_no", 1, "form-control", 2, "width", "50px"], ["formControlName", "village", 1, "form-control", 2, "width", "180px"], ["formControlName", "union", 1, "form-control", 2, "width", "180px"], ["formControlName", "post_office", 1, "form-control", 2, "width", "180px"], ["formControlName", "market_code", 1, "form-control", 2, "width", "120px"], ["formControlName", "zone_code", 1, "form-control", 2, "width", "120px"], ["formControlName", "thana_code", 1, "form-control", 2, "width", "110px"], ["formControlName", "district_code", 1, "form-control", 2, "width", "100px"], ["formControlName", "outlet_type", 1, "form-control", 2, "width", "230px"], ["formControlName", "manager_name", 1, "form-control", 2, "width", "300px"], ["formControlName", "respondent_designation", 1, "form-control", 2, "width", "200px"], ["formControlName", "contact_no1", 1, "form-control", 2, "width", "140px"], ["formControlName", "contact_no2", 1, "form-control", 2, "width", "140px"], ["formControlName", "contact_no3", 1, "form-control", 2, "width", "140px"], ["formControlName", "total_staff", 1, "form-control", 2, "width", "45px"], ["formControlName", "outlet_landmark", 1, "form-control", 2, "width", "400px"], ["formControlName", "gps_lat", 1, "form-control", 2, "width", "100px"], ["formControlName", "gps_long", 1, "form-control", 2, "width", "100px"], ["formControlName", "storage_capacity", 1, "form-control", 2, "width", "70px"], ["formControlName", "front_length", 1, "form-control", 2, "width", "50px"], ["formControlName", "front_width", 1, "form-control", 2, "width", "50px"], ["formControlName", "weekly_holiday", 1, "form-control", 2, "width", "40px"], ["formControlName", "nid", 1, "form-control", 2, "width", "140px"], ["formControlName", "survey_by", 1, "form-control", 2, "width", "300px"], ["formControlName", "entry_by", 1, "form-control", 2, "width", "300px"], ["formControlName", "visit_date", 1, "form-control", 2, "width", "150px"], ["type", "submit", 1, "btn"], [1, "far", "fa-save", "fa-lg"], [1, "btn", "btn-light", "ml-1", 3, "click"], [1, "far", "fa-trash-alt", "fa-lg", "text-danger"]], template: function ProfileUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Outlet ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Outlet Type ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Outlet Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Owner Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Holding No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Road Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Block No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Village");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Union");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Post Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Market Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Zone Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Thana Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "District Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Outlet Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Manager Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Respondent Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Contact No1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Contact No2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Contact No3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Total Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Outlet Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "GPS Lattitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "GPS Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Storage Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Front Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Front Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Weekly Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Nid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Survey By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Entry By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Vist Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ProfileUpdateComponent_span_72_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, ProfileUpdateComponent_form_74_Template, 72, 1, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.profileForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBRUUsbUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTs7RUFFRSxxQkFBQTtBQUdGOztBQUFBO0VBRUUsdUNBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBTUE7RUFDRTtJQUNFLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtdGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi50aGVhZCB7XHJcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcclxufVxyXG4udGJvZHkge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAvLyB3aWR0aDogOTBweDtcclxuICAvLyBoZWlnaHQ6IDM5MHB4O1xyXG59XHJcbi50ciB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi50ZCB7XHJcbiAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4udGhlYWQgZGl2LnRyIGRpdi50ZDpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbmk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5lbGVtZW50VG9GYWRlSW5BbmRPdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWlub3V0IDJzIGxpbmVhciBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "q4B1":
/*!*********************************************************!*\
  !*** ./src/app/services/thanaretailsreports.service.ts ***!
  \*********************************************************/
/*! exports provided: ThanaRetailsReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaRetailsReportService", function() { return ThanaRetailsReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ThanaRetailsReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.thanaendtretailsUrl = 'http://127.0.0.1:8000/api/report/thanaendretails';
        this.thanastartretailsUrl = 'http://127.0.0.1:8000/api/report/thanastartretails';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getThanaEndRetailsReport() {
        return this.httpClient.get(this.thanaendtretailsUrl);
    }
    getThanaStartRetailsReport() {
        return this.httpClient.get(this.thanastartretailsUrl);
    }
}
ThanaRetailsReportService.ɵfac = function ThanaRetailsReportService_Factory(t) { return new (t || ThanaRetailsReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ThanaRetailsReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThanaRetailsReportService, factory: ThanaRetailsReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "q9WV":
/*!*********************************************************!*\
  !*** ./src/app/main/brand-grid/brand-grid.component.ts ***!
  \*********************************************************/
/*! exports provided: BrandGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandGridComponent", function() { return BrandGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/brand.service */ "S4pr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class BrandGridComponent {
    constructor(brandservice) {
        this.brandservice = brandservice;
        this.isExpanded = true;
        this.columnDefs = this.createColumnDefs();
    }
    ngOnInit() {
        this.brandservice.getBrand().subscribe((brands) => {
            this.rowData = brands;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        // this.api.sizeColumnsToFit();
    }
    createColumnDefs() {
        return [
            {
                headerName: 'Brand Code',
                field: 'brand_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Brand Name',
                field: 'brand_name',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Company Name',
                field: 'company_name',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
        ];
    }
}
BrandGridComponent.ɵfac = function BrandGridComponent_Factory(t) { return new (t || BrandGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_brand_service__WEBPACK_IMPORTED_MODULE_1__["BrandService"])); };
BrandGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandGridComponent, selectors: [["app-brand-grid"]], decls: 4, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "1000px", 3, "columnDefs", "rowData", "gridReady"]], template: function BrandGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function BrandGridComponent_Template_ag_grid_angular_gridReady_3_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxicmFuZC1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImJyYW5kLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "rPFT":
/*!***********************************************************!*\
  !*** ./src/app/main/zone-update/zone-update.component.ts ***!
  \***********************************************************/
/*! exports provided: ZoneUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneUpdateComponent", function() { return ZoneUpdateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/zone.service */ "z8zG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ZoneUpdateComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas fa-check-circle ", ctx_r0.notification.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, " ");
} }
function ZoneUpdateComponent_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ZoneUpdateComponent_form_14_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.zoneUpdate(fg_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ZoneUpdateComponent_form_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const fg_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onDelete(fg_r2.get("zone_code").value, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", fg_r2);
} }
class ZoneUpdateComponent {
    constructor(fb, zoneservice, router) {
        this.fb = fb;
        this.zoneservice = zoneservice;
        this.router = router;
        this.zoneForms = this.fb.array([]);
    }
    ngOnInit() {
        this.zoneservice.getZone().subscribe((res) => {
            if (res == [])
                this.addZoneForm();
            else {
                res.forEach((zone) => {
                    this.zoneForms.push(this.fb.group({
                        zone_code: [zone.zone_code],
                        zone_name: [zone.zone_name],
                    }));
                });
            }
        });
    }
    addZoneForm() {
        this.zoneForms.push(this.fb.group({
            zone_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zone_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }));
    }
    zoneUpdate(fg) {
        this.zoneservice.updateZone(fg.value).subscribe((res) => {
            this.showNotification('update');
        });
    }
    onDelete(zone_code, i) {
        // if (brand_code == 0) this.brandForms.removeAt(i);
        //else if (confirm('Do you want to delete this outlet?'))
        this.zoneservice.deleteZone(zone_code).subscribe((res) => {
            confirm('Do you want to delete this zone?');
            this.zoneForms.removeAt(i);
            this.showNotification('delete');
        });
    }
    showNotification(category) {
        switch (category) {
            case 'update':
                this.notification = { class: 'text-primary', message: 'updated!' };
                break;
            case 'delete':
                this.notification = { class: 'text-danger', message: 'deleted!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 2000);
    }
}
ZoneUpdateComponent.ɵfac = function ZoneUpdateComponent_Factory(t) { return new (t || ZoneUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ZoneUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ZoneUpdateComponent, selectors: [["app-zone-update"]], decls: 15, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "grid-Table"], [1, "thead"], [1, "tr"], [1, "td"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "zone_code", 1, "form-control", 2, "width", "130px"], ["formControlName", "zone_name", 1, "form-control", 2, "width", "380px"], ["type", "submit", 1, "btn"], [1, "far", "fa-save", "fa-lg"], [1, "btn", "btn-light", "ml-1", 3, "click"], [1, "far", "fa-trash-alt", "fa-lg", "text-danger"]], template: function ZoneUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Zone Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Zone Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ZoneUpdateComponent_span_12_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ZoneUpdateComponent_form_14_Template, 11, 1, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.zoneForms.controls);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".grid-table[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.thead[_ngcontent-%COMP%] {\n  display: table-header-group;\n  font-weight: bold;\n  border-bottom: 1px solid black;\n  text-align: center;\n  background-color: #f0f8ff;\n}\n\n.tbody[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n\n.tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 10px 20px 20px;\n}\n\n.thead[_ngcontent-%COMP%]   div.tr[_ngcontent-%COMP%]   div.td[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n\n.elementToFadeInAndOut[_ngcontent-%COMP%] {\n  animation: fadeinout 2s linear forwards;\n  opacity: 0;\n}\n\n@keyframes fadeinout {\n  50% {\n    opacity: 1;\n  }\n}\n\n.example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx6b25lLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBRUUsbUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTs7RUFFRSxxQkFBQTtBQUdGOztBQUFBO0VBRUUsdUNBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBTUE7RUFDRTtJQUNFLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InpvbmUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtdGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi50aGVhZCB7XHJcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcclxufVxyXG4udGJvZHkge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAvLyB3aWR0aDogOTBweDtcclxuICAvLyBoZWlnaHQ6IDM5MHB4O1xyXG59XHJcbi50ciB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi50ZCB7XHJcbiAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4udGhlYWQgZGl2LnRyIGRpdi50ZDpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbmk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5lbGVtZW50VG9GYWRlSW5BbmRPdXQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW5vdXQgMnMgbGluZWFyIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWlub3V0IDJzIGxpbmVhciBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWlub3V0IHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "sjKD":
/*!****************************************************************************************!*\
  !*** ./src/app/main/reports/marketsalessummary/market-sales/market-sales.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MarketSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketSalesComponent", function() { return MarketSalesComponent; });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ "WZ4y");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mokamsalesreport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mokamsalesreport.service */ "x+Ty");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../header/header.component */ "l//K");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class MarketSalesComponent {
    constructor(mokamsalesreportservice) {
        this.mokamsalesreportservice = mokamsalesreportservice;
        this.mokamsalesColumnDefs = this.MokamSalesReport();
    }
    ngOnInit() {
        this.mokamsalesreportservice.getMokamSalesReport().subscribe((mokamsalesreports) => {
            this.mokamsalesrowData = mokamsalesreports;
        }, (error) => {
            console.log(error);
        });
    }
    onBtPrint() {
        const api = this.gridApi;
        setPrinterFriendly(api);
        setTimeout(function () {
            print();
            setNormal(api);
        }, 2000);
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }
    MokamSalesReport() {
        return [
            {
                headerName: 'District Name',
                field: 'district_name',
                rowGroup: true,
                filter: true,
            },
            {
                headerName: 'Thana Name',
                field: 'thana_name',
                filter: true,
                rowGroup: true,
                hide: true,
            },
            {
                headerName: 'Market',
                field: 'market_name',
                rowGroup: true,
                hide: true,
            },
            {
                headerName: 'Brand Name',
                field: 'brand_name',
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'End Month Sales Volume/Share',
                children: [
                    {
                        headerName: 'Month Name',
                        field: 'end_month',
                        filter: true,
                    },
                    {
                        headerName: 'Sales',
                        field: 'volume_end',
                        sortable: true,
                        resizable: true,
                        aggFunc: 'sum',
                        valueParser: 'Number(newValue)',
                    },
                    {
                        headerName: 'Share',
                        field: 'end_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
            {
                headerName: 'Start Month Sales/Share',
                children: [
                    {
                        headerName: 'Month Name',
                        field: 'start_month',
                        filter: true,
                    },
                    {
                        headerName: 'Sales',
                        field: 'volume_start',
                        sortable: true,
                        resizable: true,
                    },
                    {
                        headerName: 'Share',
                        field: 'start_month_ms',
                        sortable: true,
                        resizable: true,
                    },
                ],
            },
        ];
    }
}
MarketSalesComponent.ɵfac = function MarketSalesComponent_Factory(t) { return new (t || MarketSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_mokamsalesreport_service__WEBPACK_IMPORTED_MODULE_2__["MokamSalesReportService"])); };
MarketSalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MarketSalesComponent, selectors: [["app-market-sales"]], decls: 2, vars: 4, consts: [["id", "myGrid", 1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "justify-content", "center", 3, "columnDefs", "rowData", "animateRows", "groupIncludeTotalFooter", "gridReady"]], template: function MarketSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ag-grid-angular", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function MarketSalesComponent_Template_ag_grid_angular_gridReady_1_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDefs", ctx.mokamsalesColumnDefs)("rowData", ctx.mokamsalesrowData)("animateRows", true)("groupIncludeTotalFooter", true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: ["@media print {\n  body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  #myGrid[_ngcontent-%COMP%], #myGrid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n\n  #myGrid[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hcmtldC1zYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usa0JBQUE7RUFDRjs7RUFDQTs7SUFFRSxtQkFBQTtFQUVGOztFQUFBO0lBQ0Usa0JBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoibWFya2V0LXNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcclxuICBib2R5ICoge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAjbXlHcmlkLFxyXG4gICNteUdyaWQgKiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAjbXlHcmlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
function setPrinterFriendly(api) {
    const eGridDiv = document.querySelector('.my-grid');
    eGridDiv.style.height = '';
    api.setDomLayout('print');
}
function setNormal(api) {
    const eGridDiv = document.querySelector('.my-grid');
    eGridDiv.style.width = '700px';
    eGridDiv.style.height = '200px';
    // api.setDomLayout(null);
}


/***/ }),

/***/ "t/m1":
/*!*************************************************************!*\
  !*** ./src/app/main/expan-pannel/expan-pannel.component.ts ***!
  \*************************************************************/
/*! exports provided: ExpanPannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanPannelComponent", function() { return ExpanPannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");






class ExpanPannelComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExpanPannelComponent.ɵfac = function ExpanPannelComponent_Factory(t) { return new (t || ExpanPannelComponent)(); };
ExpanPannelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanPannelComponent, selectors: [["app-expan-pannel"]], decls: 144, vars: 1, consts: [["multi", "", 1, "example-headers-align"], [1, "expan-pannel"], [1, "mat-expansion-panel-header-description"], ["routerLink", "/profile/profile-grid", 1, "profile"], ["routerLink", "/profile/profile-create", 1, "profile"], ["routerLink", "/profile/profile-update", 1, "profile"], ["routerLink", "/market/market-grid", 1, "profile"], ["routerLink", "/market/market-create", 1, "profile"], ["routerLink", "/market/market-update", 1, "profile"], ["routerLink", "/zone/zone-grid", 1, "profile"], ["routerLink", "/zone/zone-create", 1, "profile"], ["routerLink", "/zone/zone-update", 1, "profile"], ["routerLink", "/brand/brand-grid", 1, "profile"], ["routerLink", "/brand/brand-create", 1, "profile"], ["routerLink", "/brand/brand-update", 1, "profile"], ["routerLink", "/main/thana-view", 1, "profile"], ["routerLink", "/main/district-view", 1, "profile"], ["routerLink", "/main/division", 1, "profile"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["href", "http://localhost:8080/jasperserver/flow.html?_flowId=searchFlow&lastMode=true", "target", "_blank", "mat-menu-item", ""]], template: function ExpanPannelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View, Create, Update or Delete a Outlet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create a New Outlet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update or Delete a Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Create, Update or Delete a Market/Mokam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "storefront");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Market Grid View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Create a New Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Update or Delete a Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Create, Update or Delete a Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Zone Grid View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Create a New Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Update or Delete a Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " View, Create, Update or Delete a Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Brand Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Create a New Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Update or Delete a Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Thana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " View or Create a Thana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Thana Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " View or Create a District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "District Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Division ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-panel-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " View or Create a Division ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-list-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Division Grid View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "table_view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-menu", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "View Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.expan-pannel[_ngcontent-%COMP%] {\n  width: 35%;\n  margin-right: 10px;\n  background-color: red;\n  margin: 20px;\n}\n\n.profile[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  border: solid white;\n  border-width: 0 10px;\n  border-radius: 0;\n  background: green;\n  color: white;\n  font-size: 18px;\n  margin: 0px auto 10px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBhbi1wYW5uZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiZXhwYW4tcGFubmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYWN0aW9uLWJ1dHRvbnMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leHBhbi1wYW5uZWwge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDAgMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAtMHB4IGF1dG8gMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "tCd9":
/*!*******************************************************!*\
  !*** ./src/app/services/thanadetailreport.service.ts ***!
  \*******************************************************/
/*! exports provided: Thanadetailservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thanadetailservice", function() { return Thanadetailservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class Thanadetailservice {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.thanadetailsUrl = 'http://127.0.0.1:8000/api/report/thanadetails';
        this.crowndetailsUrl = 'http://127.0.0.1:8000/api/report/crownsummary';
        this.leadingdetailUrl = 'http://127.0.0.1:8000/api/report/leadingbrandsummary';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getThanaDetailsReport() {
        return this.httpClient.get(this.thanadetailsUrl);
    }
    getCrownDetailReport() {
        return this.httpClient.get(this.crowndetailsUrl);
    }
    getLeadingBrandDetailReport() {
        return this.httpClient.get(this.leadingdetailUrl);
    }
}
Thanadetailservice.ɵfac = function Thanadetailservice_Factory(t) { return new (t || Thanadetailservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
Thanadetailservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Thanadetailservice, factory: Thanadetailservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "v/kp":
/*!**********************************************!*\
  !*** ./src/app/services/district.service.ts ***!
  \**********************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DistrictService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/district-list/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getDistrict() {
        return this.httpClient.get(this.baseUrl);
    }
    createDistrict(district_code, district_name) {
        const body = JSON.stringify({ district_code, district_name });
        return this.httpClient.post(this.baseUrl, body, this.httpheaders);
    }
}
DistrictService.ɵfac = function DistrictService_Factory(t) { return new (t || DistrictService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DistrictService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DistrictService, factory: DistrictService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wE/V":
/*!***********************************************************!*\
  !*** ./src/app/main/market-grid/market-grid.component.ts ***!
  \***********************************************************/
/*! exports provided: MarketGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketGridComponent", function() { return MarketGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_market_point_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/market-point.service */ "B0OP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





class MarketGridComponent {
    constructor(zoneservice) {
        this.zoneservice = zoneservice;
        this.columnDefs = this.createColumnDefs();
    }
    ngOnInit() {
        this.zoneservice.getMarket().subscribe((markets) => {
            this.rowData = markets;
        }, (error) => {
            console.log(error);
        });
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        // this.api.sizeColumnsToFit();
    }
    createColumnDefs() {
        return [
            {
                headerName: 'Market Code',
                field: 'market_code',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
            {
                headerName: 'Market Name',
                field: 'market_name',
                editable: true,
                filter: true,
                resizable: true,
                sortable: true,
            },
        ];
    }
}
MarketGridComponent.ɵfac = function MarketGridComponent_Factory(t) { return new (t || MarketGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_market_point_service__WEBPACK_IMPORTED_MODULE_1__["MarketService"])); };
MarketGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketGridComponent, selectors: [["app-market-grid"]], decls: 4, vars: 2, consts: [["color", "primary", 1, "example-toolbar"], ["routerLink", "/main", 1, "example-app-name"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "1000px", 3, "columnDefs", "rowData", "gridReady"]], template: function MarketGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crown RPBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function MarketGridComponent_Template_ag_grid_angular_gridReady_3_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("rowData", ctx.rowData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], styles: [".example-app-name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXJrZXQtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJtYXJrZXQtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFwcC1uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "l//K");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "fP+P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class MainComponent {
    constructor() {
        this.sideBarOpen = true;
    }
    ngOnInit() { }
    sideBarToggler($event) {
        this.sideBarOpen = !this.sideBarOpen;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 1, consts: [[3, "toggleSideBarForMe"], ["mode", "side", 3, "opened"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideBarForMe", function MainComponent_Template_app_header_toggleSideBarForMe_0_listener($event) { return ctx.sideBarToggler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideBarOpen);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n  background-color: white;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: url('crown_background.jpg') no-repeat center;\n  background-size: cover;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx3REFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtZHJhd2VyIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Nyb3duX2JhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "x+Ty":
/*!******************************************************!*\
  !*** ./src/app/services/mokamsalesreport.service.ts ***!
  \******************************************************/
/*! exports provided: MokamSalesReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MokamSalesReportService", function() { return MokamSalesReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MokamSalesReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.mokamsalesUrl = 'http://127.0.0.1:8000/api/report/marketsalesvolume';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getMokamSalesReport() {
        return this.httpClient.get(this.mokamsalesUrl);
    }
}
MokamSalesReportService.ɵfac = function MokamSalesReportService_Factory(t) { return new (t || MokamSalesReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MokamSalesReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MokamSalesReportService, factory: MokamSalesReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "z2Ri":
/*!*************************************************************!*\
  !*** ./src/app/main/thana/add-thana/add-thana.component.ts ***!
  \*************************************************************/
/*! exports provided: AddThanaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddThanaComponent", function() { return AddThanaComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_thana_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/thana.service */ "zED6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class AddThanaComponent {
    constructor(thanaservice, router) {
        this.thanaservice = thanaservice;
        this.router = router;
        this.thanaform = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            thana_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            thana_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.addThana = () => {
            console.log(this.thanaform.value);
            this.thanaservice
                .createThana(this.thanaform.value.thana_code, this.thanaform.value.thana_name)
                .subscribe((result) => console.log(result), (error) => console.log(error));
        };
    }
    ngOnInit() { }
}
AddThanaComponent.ɵfac = function AddThanaComponent_Factory(t) { return new (t || AddThanaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_thana_service__WEBPACK_IMPORTED_MODULE_2__["ThanaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddThanaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddThanaComponent, selectors: [["app-add-thana"]], decls: 13, vars: 4, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "thana_code"], ["type", "text", "formControlName", "thana_name"], ["type", "submit"]], template: function AddThanaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddThanaComponent_Template_form_ngSubmit_0_listener() { return ctx.addThana(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Thana Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Thana Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "json");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.thanaform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 2, ctx.thanaform.value), "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGhhbmEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "z8zG":
/*!******************************************!*\
  !*** ./src/app/services/zone.service.ts ***!
  \******************************************/
/*! exports provided: ZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneService", function() { return ZoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ZoneService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/zone-list/';
        this.updateUrl = 'http://127.0.0.1:8000/api/zone-update/';
        this.createUrl = 'http://127.0.0.1:8000/api/zone-create/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    editZone(zone) {
        return this.httpClient.put(this.updateUrl + 'zone-detail/', zone);
    }
    getZone() {
        return this.httpClient.get(this.baseUrl);
    }
    createZone(formData) {
        return this.httpClient.post(this.createUrl, formData);
    }
    updateZone(formData) {
        return this.httpClient.put(this.updateUrl + formData.zone_code, formData);
    }
    deleteZone(id) {
        return this.httpClient.delete(this.updateUrl + id);
    }
}
ZoneService.ɵfac = function ZoneService_Factory(t) { return new (t || ZoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ZoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ZoneService, factory: ZoneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zED6":
/*!*******************************************!*\
  !*** ./src/app/services/thana.service.ts ***!
  \*******************************************/
/*! exports provided: ThanaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanaService", function() { return ThanaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ThanaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/api/thana-list/';
        // thanaUrl = 'http://127.0.0.1:8000/api/thana-detail/';
        this.httpheaders = {
            headers: { 'Content-Type': 'application/json' },
        };
    }
    getThana() {
        return this.httpClient.get(this.baseUrl);
    }
    createThana(thana_code, thana_name) {
        const body = JSON.stringify({ thana_code, thana_name });
        return this.httpClient.post(this.baseUrl, body, this.httpheaders);
    }
}
ThanaService.ɵfac = function ThanaService_Factory(t) { return new (t || ThanaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ThanaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThanaService, factory: ThanaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map