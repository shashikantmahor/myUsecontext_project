const NODE_ENV = "development";

export const loginApi = "https://product.infield.co.in:8092/api/login/";

export const baseURL = 'https://product.infield.co.in:8092/api'

export const imgBaseUrl = "https://product.infield.co.in:8092/api/docs/getmyfile/"

export const userRoles = {
    city_team: 'ISP',
    // mis_team: 'admin',
    // client: 'client'
}


export const searchKeyword=[
    {
        label:"Pending for approval MIS",
        value:"pending_for_approval_mis"
    }, {
        label:"Pendingfor approval Client",
        value:"pending_for_approval_client"
    },
    {
        label:"Rejected by MIS",
        value:"rejected_by_mis"
    },
    {
        label:"Rejected by Client",
        value:"rejected_by_client"
    }
]

