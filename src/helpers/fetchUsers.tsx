
export const fetchUsers = async () => {
    const res = await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/Marco',{
        method: 'GET'
    });
    const data = await res.json();
    return data;
}
