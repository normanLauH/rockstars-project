from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *
from users.models import *

# Create your views here.

class TaskGroupViewSet(ModelViewSet):
    queryset = TaskGroup.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskGroupSerializer

class TaskGroupUsersViewSet(ModelViewSet):
    queryset = TaskGroupUsers.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskGroupUsersSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer