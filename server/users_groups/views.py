from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import User, Group
from .serializers import UserSerializer, GroupSerializer


@api_view(['GET'])
def get_list_of_users(request):
    user_id = request.GET.get('user_id', None)
    username = request.GET.get('username', None)
    group_id = request.GET.get('group_id', None)
    if user_id:
        query = User.objects.filter(id=user_id)
    else:
        query = User.objects.all()
    if username:
        query = query.filter(username=username)
    if group_id:
        users = query.filter(groups=group_id)
    else:
        users = query.all()
    serializer = UserSerializer(users, many=True)
    if not serializer.data:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def user_create(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def user_update(request, pk):
    data = request.data
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def user_delete(request, pk):
    user = User.objects.get(id=pk)
    user.delete()
    return Response({'message': 'User was deleted!'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_list_of_groups(request):
    group_id = request.GET.get('group_id', None)
    name = request.GET.get('name', None)
    description = request.GET.get('desc', None)
    if group_id:
        query = Group.objects.filter(id=group_id)
    else:
        query = Group.objects.all()
    if name:
        query = query.filter(name=name)
    if description:
        groups = query.filter(description__contains=description)
    else:
        groups = query.all()
    serializer = GroupSerializer(groups, many=True)
    if not serializer.data:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def group_create(request):
    data = request.data
    serializer = GroupSerializer(data=data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def group_update(request, pk):
    data = request.data
    group = Group.objects.get(id=pk)
    serializer = GroupSerializer(instance=group, data=data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def group_delete(request, pk):
    group = Group.objects.get(id=pk)
    group.delete()
    return Response({'message': 'Group was deleted!'}, status=status.HTTP_200_OK)
