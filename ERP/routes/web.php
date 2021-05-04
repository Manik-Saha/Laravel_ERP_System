<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\inventoryController;
use App\Http\Controllers\productController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\HrController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SupplyChainManagerController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\OrderController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[dashboardController::class,'dashboard'])->name('dashboard');

Route::get('/dashboard',[dashboardController::class,'dashboard'])->name('dashboard');
Route::get('/category',[inventoryController::class,'allCategory'])->name('category');
Route::get('/addcategory',[inventoryController::class,'addCategory'])->name('addcategory');
Route::post('/storecategory',[inventoryController::class,'store'])->name('storecategory');
Route::get('/allcategory',[inventoryController::class,'allCategory']);
Route::get('delete/category/{id}',[inventoryController::class,'delete']);
Route::get('edit/category/{id}',[inventoryController::class,'edit']);
Route::post('update/category/{id}',[inventoryController::class,'update']);

//brand
Route::get('/brand',[inventoryController::class,'allbrand'])->name('brand');
Route::get('/addbrand',[inventoryController::class,'addbrand'])->name('addbrand');
Route::post('/storebrand',[inventoryController::class,'storebrand'])->name('storebrand');
Route::get('/allbrand',[inventoryController::class,'allbrand']);
Route::get('delete/brand/{id}',[inventoryController::class,'deleteb']);
Route::get('edit/brand/{id}',[inventoryController::class,'editb']);
Route::post('update/brand/{id}',[inventoryController::class,'updateb']);

//products
Route::get('/product',[productController::class,'allproduct'])->name('product');
Route::get('/addproduct',[productController::class,'addproduct'])->name('addproduct');
Route::post('/storeproduct',[productController::class,'storeproduct'])->name('storeproduct');
Route::get('edit/product/{id}',[productController::class,'editproduct']);




Route::group(['middleware' => 'hr_manager'], function(){
    
//HR
Route::get('HR/dashboard', [HrController::class, 'index'])->name('HR.dashboard');
Route::get('HR/profile', [HrController::class, 'profile']);
Route::get('HR/chat', [HrController::class, 'chat']);
Route::get('HR/change_password', [HrController::class, 'changePassword'])->name('HR.changePassword');
Route::post('HR/change_password', [HrController::class, 'storeChangePassword']);

//chat
Route::get('chat', [HrController::class, 'chat']);

//Staff
Route::get('Staff/create',[StaffController::class, 'create'])->name('Staff.create');
Route::post('Staff/create',[StaffController::class, 'store']);
Route::get('Staff/list', [StaffController::class, 'show'])->name('Staff.list');
Route::get('Staff/edit/{user_id}', [StaffController::class, 'edit'])->name('Staff.edit');
Route::post('Staff/edit/{user_id}', [StaffController::class, 'update']);
Route::get('Staff/delete/{user_id}', [StaffController::class, 'delete'])->name('Staff.delete');
Route::post('Staff/delete/{user_id}', [StaffController::class, 'destroy']);
Route::get('Staff/promotion/{user_id}', [StaffController::class, 'promotion'])->name('Staff.promotion');
Route::post('Staff/promotion/{user_id}', [StaffController::class, 'storePromotion']);
Route::get('Staff/bonus/{user_id}', [StaffController::class, 'bonus'])->name('Staff.bonus');
Route::post('Staff/bonus/{user_id}', [StaffController::class, 'storeBonus']);

});

Route::group(['middleware' => 'supply_chain_manager'], function(){

//Supply chain manager
Route::get('supply_chain_manager/dashboard', [SupplyChainManagerController::class, 'index'])->name('SupplyChainManager.dashboard');
Route::get('supply_chain_manager/profile', [SupplyChainManagerController::class, 'profile'])->name('SupplyChainManager.profile');
Route::get('supply_chain_manager/change_password', [SupplyChainManagerController::class, 'changePassword'])->name('SupplyChainManager.changePassword');
Route::post('supply_chain_manager/change_password', [SupplyChainManagerController::class, 'storeChangePassword']);



//production
Route::get('supply_chain_manager/all_production', [SupplyChainManagerController::class, 'production'])->name('SupplyChainManager.production');
Route::get('supply_chain_manager/all_ready_production', [SupplyChainManagerController::class, 'readyProduction'])->name('SupplyChainManager.ready');
Route::get('supply_chain_manager/edit_production/{product_id}', [SupplyChainManagerController::class, 'edit'])->name('SupplyChainManager.edit');
Route::post('supply_chain_manager/edit_production/{product_id}', [SupplyChainManagerController::class, 'editProduction']);
Route::get('supply_chain_manager/all_upcoming_production', [SupplyChainManagerController::class, 'upcomingProduction'])->name('SupplyChainManager.upcoming');

//order
Route::get('supply_chain_manager/order_management/all_order', [OrderController::class, 'index'])->name('SupplyChainManager.order');
Route::get('supply_chain_manager/order_management/cancelled_order', [OrderController::class, 'cancelled'])->name('SupplyChainManager.cancelledOrder');
Route::get('supply_chain_manager/order_management/complete_order', [OrderController::class, 'complete'])->name('SupplyChainManager.completeOrder');
Route::get('supply_chain_manager/order_management/running_order', [OrderController::class, 'running'])->name('SupplyChainManager.runningOrder');
Route::get('supply_chain_manager/order_management/order/edit/{order_id}', [OrderController::class, 'editOrder'])->name('SupplyChainManager.editOrder');
Route::post('supply_chain_manager/order_management/order/edit/{order_id}', [OrderController::class, 'storeOrder']);

});


//Login
Route::get('/login', [LoginController::class, 'index']);
Route::post('/login', [LoginController::class, 'verify']);

//Logout
Route::get('/logout', [LogoutController::class, 'index']);



