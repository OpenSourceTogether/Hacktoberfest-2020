#merge function
def merge(arr, l, m, r):
   n1 = m - l + 1
   n2 = r- m
   # create arrays
   L = [0] * (n1)
   R = [0] * (n2)
   # Copy data to arrays
   for i in range(0 , n1):
      L[i] = arr[l + i]
   for j in range(0 , n2):
      R[j] = arr[m + 1 + j]
   i = 0 # first half of array
   j = 0 # second half of array
   k = l # merges two halves
   while i < n1 and j < n2 :
      if L[i] <= R[j]:
         arr[k] = L[i]
         i += 1
      else:
         arr[k] = R[j]
         j += 1
      k += 1
   # copy the left out elements of left half
   while i < n1:
      arr[k] = L[i]
      i += 1
      k += 1
   # copy the left out elements of right half
   while j < n2:
      arr[k] = R[j]
      j += 1
      k += 1
# sort
def mergeSort(arr,l,r):
   if l < r:
      # getting the average
      m = (l+(r-1))/2
      # Sort
      mergeSort(arr, l, m)
      mergeSort(arr, m+1, r)
      merge(arr, l, m, r)
# main
arr = [2,5,3,8,6,5,4,7]
n = len(arr)
mergeSort(arr,0,n-1)
print ("Sorted array is")
for i in range(n):
   print (arr[i],end=" ")
