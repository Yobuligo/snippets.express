import { IEntityRepository } from "../repositories/IEntityRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRouteMeta } from "../shared/types/IRouteMeta";
import { Controller } from "./Controller";

export abstract class EntityController<
  TEntity extends IEntity
> extends Controller {
  constructor(
    private routeMeta: IRouteMeta,
    private repo: IEntityRepository<TEntity>
  ) {
    super();
    this.deleteById();
    this.insert();
    this.findAll();
    this.findById();
    this.update();
  }

  private deleteById() {
    this.router.delete(`${this.routeMeta}/:id`, (req, res) => {
      const id = req.params.id;
      const success = this.repo.deleteById(id);
      if (!success) {
        res.status(404).end();
      } else {
        res.status(204).end();
      }
    });
  }

  private findAll() {
    this.router.get(this.routeMeta.path, async (_, res) => {
      const entities = await this.repo.findAll();
      res.status(200).send(entities);
    });
  }

  private findById() {
    this.router.get(`${this.routeMeta.path}/:id`, async (req, res) => {
      const id = req.params.id;
      const entity = await this.repo.findById(id);
      if (entity) {
        res.status(200).send(entity);
      } else {
        res.status(404).end();
      }
    });
  }

  private insert() {
    this.router.post(this.routeMeta.path, async (req, res) => {
      const entity: IEntityDetails<TEntity> = req.body;
      const createdEntity = await this.repo.insert(entity);
      res.status(201).send(createdEntity);
    });
  }

  private update() {
    this.router.put(this.routeMeta.path, async (req, res) => {
      const entity = req.body;
      const updatedEntity = await this.repo.update(entity);
      res.status(200).send(updatedEntity);
    });
  }
}
