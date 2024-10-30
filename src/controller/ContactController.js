import Contact from "../model/Contact.js";

class ContactController {
  async create(req, res, next) {
    try {
      const data = await Contact.create(req.body);
      if (data) {
        return res.status(201).json({
          success: true,
          data,
          messages: "Create successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      const data = await Contact.find();
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async getDetail(req, res, next) {
    try {
      const data = await Contact.findById(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const data = await Contact.findByIdAndDelete(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "delete successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await Contact.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body, updatedAt: new Date() },
        { new: true }
      );
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new ContactController();
