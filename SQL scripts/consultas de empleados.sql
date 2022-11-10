use employees;
select 
	E.emp_no as '# empleado', 
    title as 'Titulo',
    salary as 'Salario',
    concat(first_name, ' ', last_name) as 'Nombre Completo', 
    dept_name as 'Nombre de departamento'
    
from employees E
join dept_emp De
on E.emp_no= De.emp_no
join departments D
on D.dept_no= De.dept_no 
join titles t
on t.emp_no= E.emp_no
join salaries s 
on s.emp_no= E.emp_no

where dept_name='Development' and last_name like 'S%' and salary>1000
order by E.first_name;


