from django.db import models

# Create your models here.
class Destination(models.Model):
    
    name = models.CharField(max_length=128)
    url = models.URLField()
    

    def __unicode__(self):
        return self.name