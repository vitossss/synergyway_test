from rest_framework import serializers
from .models import User, Group


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'created', 'groups')

    def to_representation(self, instance):
        representation = super(UserSerializer, self).to_representation(instance)
        representation['created'] = instance.created.strftime("%Y-%m-%d %H:%M:%S")
        representation['groups'] = GroupSerializer(instance=instance.groups).data
        return representation


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'
