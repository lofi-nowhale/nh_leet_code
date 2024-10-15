# Root equals sum of children - intro binary tree
def check_tree(root)
  puts root
  if root.left.val + root.right.val == root.val
      true
  else 
      false 
  end
end


# Running Sum of a 1D array
def running_sum(nums)
  sum = 0 
  cumulative_sum = nums.map do |element, i|
      sum += element
  end
  cumulative_sum
end

# Richest Customer Wealth
accounts = [[1,2,3],[3,2,1]]

def maximum_wealth(accounts)
  highest_wealth = 0

  accounts.each do |account|
    current_balance = account.sum

    if current_balance > highest_wealth
      current_balance = highest_wealth
    end
  end
  highest_wealth
end

# Fizz Buzz
n = 3
def fizz_buzz(n)
  fb_string = []
  i = 0
  (1..n).each do |i|
    if i % 3 == 0 && i % 5 == 0
      fb_string << "FizzBuzz"
    elsif i % 3 == 0
      fb_string << "Fizz"
    elsif i % 5 == 0 
      fb_string << "Buzz"
    else
      fb_string << i.to_s
    end 
    i += 1 
  end
  fb_string
end