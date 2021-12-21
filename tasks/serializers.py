# import serializer from rest_framework
from rest_framework import serializers
  
# import model from models.py
from .models import *
from users.models import User
from users.serializers import UserSerializer


class TaskGroupSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = TaskGroup
        fields = '__all__'


class TaskGroupUsersSerializer(serializers.ModelSerializer):
    # specify model and fields
    class Meta:
        model = TaskGroupUsers
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


