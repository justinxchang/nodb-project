let messages = [
    'Text message 1',
    'Text message 2',
    'Text message 3',
]

module.exports = {
    create: (req, res) => {
        messages.push(req.body.input)
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        for(let i=0; i < messages.length; i++){
            if(i == req.params.id){
                messages.splice(i, 1)
            }
        }
        res.status(200).send(messages)
    },
    update: (req, res) => {
        for(let i=0; i < messages.length; i++){
            if(i == req.params.id){
                messages[i] = req.body.input
            }
        }
        res.status(200).send(messages)
    },
}
