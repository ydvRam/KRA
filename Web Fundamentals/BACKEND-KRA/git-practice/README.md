📘 Git Learning Notes (Day 1)
1️⃣ Initialize Git Repository

git init
git status

2️⃣ Add & Commit Files

git add filename
git add .
git commit -m "your message"
git log --oneline

3️⃣ Create Branch

git branch branch-name
git checkout -b branch-name
git branch

4️⃣ Switch Branch

git checkout branch-name

5️⃣ Merge Branch

git checkout master
git merge branch-name

6️⃣ Merge Conflict

Conflict markers:
<<<<<<< HEAD
=======
>>>>>>> branch-name

Resolve conflict:
git add filename
git commit -m "fix: resolve merge conflict"

7️⃣ Connect to Remote Repository

git remote add origin repo-url
git push -u origin branch-name
git push origin branch-name

8️⃣ Pull Latest Changes

git pull origin branch-name

9️⃣ Pull Request (PR)

Create branch

Commit changes

Push branch

Create PR on GitHub

Review & Merge

✅ Topics Covered:
Git Init • Add • Commit • Branch • Switch • Merge • Conflict • Push • Pull • PR