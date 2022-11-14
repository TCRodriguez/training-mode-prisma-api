import { Request, Response} from 'express';

function getHello(req: Request, res: Response) {
    res.send("Hello, Universe!");
}

function index(req: Request, res: Response) {
    res.send("Get Users hit.")
}

function show(req: Request, res: Response) {
    res.send('Get User hit.');
}

function create(req: Request, res: Response) {
    res.send('Post User hit.');
}

function edit(req: Request, res: Response) {
    res.send('Edit User hit.');
}

function deleteUser(req: Request, res: Response) {
    res.send('Delete User hit.');
}

export default { getHello, index, show, create, edit, deleteUser };