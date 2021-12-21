from django.db import models
from users.models import User

class TaskGroup(models.Model):
    name = models.CharField(max_length = 200)

class TaskGroupUsers(models.Model):
    taskgroup = models.ForeignKey(TaskGroup, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
class Task(models.Model):
    name = models.CharField(max_length = 200)
    description = models.CharField(max_length = 200)
    done = models.BooleanField()
    taskgroup = models.ForeignKey(TaskGroup, on_delete=models.CASCADE)