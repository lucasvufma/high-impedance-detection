from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [

    path('', views.loginPage, name='login'),
    path('submit',views.login_submit,  name='submit'),
    path('logado/',views.index,  name='index'),
    path('logout/',views.logout_user,  name='logout'),

]