from django.shortcuts import render,redirect, render_to_response
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.models import User
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.contrib import messages

def loginPage(request):
    if request.session._session:
        return redirect('/logado/')
    else:
        return render(request,'login.html')

@csrf_protect   
def login_submit(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username = username, password = password)

        if user is not None:
           login(request, user)
          
           return redirect('/logado/')
        else:
            messages.error(request,'Usuário ou senha invalidos')
    return redirect('/')

def index(request):
    if request.session._session:
        return render(request,'home.html')
    else:
        messages.error(request, 'Você precisa estar logado!')
        return redirect('/')

def logout_user(request):
    
    logout(request)

    return redirect('/')

